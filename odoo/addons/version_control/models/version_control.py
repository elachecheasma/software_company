from odoo import fields, models


class VersionControl(models.Model):
    _name = 'version.control'

    line_ids = fields.One2many("version.control.line", "version_id", "Lines")


class VersionControlLine(models.Model):
    _name = 'version.control.line'

    version_id = fields.Many2one("version.control", "Version")
    action_server_id = fields.Many2one("ir.actions.server", "Action Server")

    name = fields.Char("Commit message")
    version_id = fields.Char("Version ID")
    