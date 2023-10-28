# Letsboot Flow App Engine Template

Unofiicial template for deploying a Node.js application to the Flow App Engine.

## Usage:

1. Fork repository or copy content

2. Create a GitLab Repository Deploy Token with "registry_read" access, which will be used by the Flow App Engine to pull your image.

3. Get your Flow Swiss App Engine Credentials

4. Adapt your projects settings to ensure, no one has access who shouldn't be able deploy to your Flow Swiss Account! Especially the Pipeline and CI Variables have to be secured.

5. Create the following GitLab CI Variables:

  - FLOW_APP_ENGINE_USER - User for the Flow App Engine
  - FLOW_APP_ENGINE_PASSWORD - Dynamically generated password for the Flow App Engine (alternatively use App Engine Token)
  - FLOW_REGISTRY_USER - Username of the GitLab Deploy Token
  - FLOW_REGISTRY_PASSWORD - Password of the GitLab Deploy Token

6. Push any change to your repository (i.e. changing the response in the index.js)

7. Watch the pipeline and open the URL provided at the end in your Browser

Hint:
For more advanced environment options, we recommend to create a test environment manually in the UI of the Flow App Engine, and look at the JSON in the task list (button in the bottom left).