from odoo import fields, models


class BaseAutomationInherit(models.Model):
    _inherit = 'base.automation'