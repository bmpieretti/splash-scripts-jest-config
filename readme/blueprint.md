# {{ pkg.name }}
<strong>Version: {{ pkg.version }}</strong>
<br />
{{ pkg.description }}
{{ template:toc }}
{{ load:readme/installation.md }}
{{ load:readme/usage.md }}
{{ load:readme/development.md }}
{{ load:readme/versions.md }}
{{ load:readme/license.md }}
