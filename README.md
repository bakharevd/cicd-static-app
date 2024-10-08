# welcome to the club

When a push is received to the main branch, a GitHub Action is triggered that builds the project, performs the selint check, and continues with deployment if the selint check passes successfully. 

If the selint check fails, a notification will be sent to a Telegram channel from the bot, and a notification will also be sent to Telegram upon a successful build.
