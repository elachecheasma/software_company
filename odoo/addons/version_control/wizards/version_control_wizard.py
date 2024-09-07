import logging
import gitlab

from odoo import api, fields, models, Command
from odoo.exceptions import ValidationError

_logger = logging.getLogger('__name__')


class VersionControlWizard(models.TransientModel):
    _name = 'version.control.wizard'
    _description = "Version Control Wizard"

    name = fields.Char(string="Commit message", required=True)

    def action_confirm(self):
        gl = gitlab.Gitlab(url='http://ogit.wffeitas.com:11091', private_token='Y_sdPya_UVVsH_ady9in')
        project = gl.projects.get("F001/versioncontrol")
        
        am = self._context.get("active_model")
        ai = self._context.get("active_id")
        _obj = self.env[am].browse(ai)

        _file_path = "%s-%d" % (am, ai)

        _action = "create"
        if len(_obj.version_control_line_ids) > 0:
            _action = "update"

        _content = _obj.code

        data = {
            'branch': 'master',
            'commit_message': self.name,
            'actions': [
                {
                    'action': _action,
                    'file_path': _file_path,
                    'content': _content,
                }
            ]
        }

        commit = project.commits.create(data)

        _vals = {
            "name": self.name,
            "version_id": commit.short_id
        }

        if self._context.get("active_model") == "ir.actions.server":
            _vals.update({"action_server_id": self._context.get("active_id")})

        self.env['version.control.line'].create(_vals)
