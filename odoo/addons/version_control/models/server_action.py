from odoo import fields, models


class actionServer(models.Model):
    _inherit = 'ir.actions.server'

    version_control_line_ids = fields.One2many("version.control.line", "action_server_id", "Lines")

