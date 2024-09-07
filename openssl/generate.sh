# Paths to the CA key and certificate
CA_KEY="/openssl/ca/ca.key"
CA_CERT="/openssl/ca/ca.crt"

# Paths to the server key and certificate
SERVER_KEY="/odoo/ssl/private/server.key"
SERVER_CERT="/odoo/ssl/private/server.crt"
SERVER_PEM="/odoo/ssl/private/fullchain.pem"

# Path to the DH parameters file
DH_PARAMS="/odoo/ssl/private/dhparam"

generate_ca() {
    # Generate the CA key and certificate
    echo "Starting CA generation..."
    openssl req -x509 -nodes -days 3650 -newkey rsa:4096 -keyout "$CA_KEY" -out "$CA_CERT" -config /openssl/ca/openssl.cnf || exit 1
    echo "New CA generated."
}

generate_server_cert() {
    # Generate server key and CSR
    echo "Generating CSR for the server..."
    openssl req -new -nodes -keyout "$SERVER_KEY" -newkey rsa:4096 -config /openssl/ca/openssl.cnf -out /tmp/server.csr || exit 1

    # Sign the server certificate with the CA
    echo "Signing the server certificate..."
    openssl x509 -req -days 90 -in /tmp/server.csr -CA "$CA_CERT" -CAkey "$CA_KEY" -out "$SERVER_CERT" -extfile /openssl/ca/server.ext || exit 1

    # Combine server certificate and CA certificate into a full chain file
    echo "Creating full chain certificate..."
    cat "$SERVER_CERT" "$CA_CERT" >"$SERVER_PEM" || exit 1

    echo "New server certificate generated."
}

generate_dh_params() {
    # Generate Diffie-Hellman parameters
    openssl dhparam -out "$DH_PARAMS" 2048 || exit 1
    echo "New DH parameters generated."
}

# Check if the CA key and certificate already exist
if [ -f "$CA_KEY" ] && [ -f "$CA_CERT" ]; then
    echo "CA key and certificate found. Checking validity..."

    # Check if the certificate is near expiration - adjust the '365' to your needs for how many days before actual expiration you want to start considering it 'near expiration'
    if openssl x509 -checkend $((365 * 24 * 60 * 60)) -noout -in "$CA_CERT"; then
        echo "CA certificate is valid and not near expiration."
    else
        echo "CA certificate is near expiration or already expired. Regenerating..."
        generate_ca
    fi
else
    echo "CA key or certificate not found. Generating new CA..."
    generate_ca
fi

# Check if the server key and certificate already exist
if [ -f "$SERVER_KEY" ] && [ -f "$SERVER_CERT" ]; then
    echo "Server key and certificate found. Checking validity..."

    # Check if the certificate is near expiration - adjust the '30' to your needs for how many days before actual expiration you want to start considering it 'near expiration'
    if openssl x509 -checkend $((30 * 24 * 60 * 60)) -noout -in "$SERVER_CERT"; then
        echo "Server certificate is valid and not near expiration."
    else
        echo "Server certificate is near expiration or already expired. Regenerating..."
        generate_server_cert
    fi
else
    echo "Server key or certificate not found. Generating new server certificate..."
    generate_server_cert
fi

# Check if the DH parameters file already exists and is valid
if [ -f "$DH_PARAMS" ]; then
    if [ -s "$DH_PARAMS" ]; then
        if openssl dhparam -check -in "$DH_PARAMS" >/dev/null 2>&1; then
            echo "DH parameters file is valid."
        else
            echo "DH parameters file is invalid. Regenerating..."
            generate_dh_params
        fi
    else
        echo "DH parameters file is empty. Regenerating..."
        generate_dh_params
    fi
else
    echo "DH parameters file not found. Generating new DH parameters..."
    generate_dh_params
fi

exit 0
