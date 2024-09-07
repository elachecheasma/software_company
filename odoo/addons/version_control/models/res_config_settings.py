from odoo import fields, models


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    git_url = fields.Char(string="Git URL", config_parameter='git.url')
    git_private_token = fields.Char(string="Git Private Token", config_parameter='git.private.token')
    git_oauth_token = fields.Char(string="Git Oauth ", config_parameter='git.oauth.token')
