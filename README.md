# Deno Playground

<div>
<img src="https://deno.land/logo.svg" width="100" height="100"/>
</div>

This is just to play around with [Deno](https://deno.land/)


### Postgres
This app connects to postgres, the config can be provided from `config.json` file, which currently have the placeholder options. Currently it does not create any database/tables by itself. It is a manual process for now.

You would either want to update those credentials (_and make sure you don't check then into version control_). A better way is to create a `local.config.json` which would override any options from the main config, and since that file is ignored by git, you're all set and don't have to worry about reverting back stuff.