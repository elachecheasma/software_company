FROM alpine:3.19

RUN apk update && apk --no-cache add openssl

COPY ./ca /openssl/ca
COPY ./generate.sh /openssl/generate.sh


CMD ["/bin/sh", "/openssl/generate.sh"]