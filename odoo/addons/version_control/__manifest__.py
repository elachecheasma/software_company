{
    "name": "Version Control",
    "version": "1.0",
    "category": "Extra Tools",
    "author": "Feitas",
    "website": "www.wffeitas.com",
    "price": 0,
    "currency": "USD",
    "summary": "versoin control for server action etc",
    "support": "",
    "description": """
Version Control
====================
""",
    "depends": ["web", "base_automation"],
    "data": [
        'security/ir.model.access.csv',

        'views/res_config_settings_view.xml',
        'wizards/version_control_wizard_views.xml',

        'views/action_server_views.xml',
        'views/feitas_version_views.xml',

    ],
    "external_dependencies": {
        "python": ["python-gitlab"]
    },
    "images": ["static/description/banner1.jpg"],
    "license": "LGPL-3",
    "installable": True,
    "auto_install": False,
}
