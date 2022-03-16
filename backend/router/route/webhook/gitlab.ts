import express from 'express';

import gitlabParser from 'backend/parser/gitlab';
import StatusManager from 'backend/status/manager';
import GitLabWebhook from 'types/gitlab';
import Status from 'types/status';

const router = express.Router();

router.post('/', (request, response) => {
    console.log('[route/webhook/gitlab] Webhook received.');

    const gitlabWebhook: GitLabWebhook = request.body;

    let status: Status | null = null;

    switch (gitlabWebhook.object_kind) {
        case 'build':
            status = gitlabParser.parseBuild(gitlabWebhook);
            break;
        case 'pipeline':
            status = gitlabParser.parsePipeline(gitlabWebhook);
            break;
        case 'deployment':
            // TODO: See 60.json and 63.json
            console.log(`[route/webhook/gitlab] Deployment webhooks are not yet supported.`);
            break;
        default:
            console.log(`[route/webhook/gitlab] No parser for webhook type ${gitlabWebhook.object_kind}.`);
    }

    if (status !== null) {
        StatusManager.setStatus(status);
    }

    response.json({ message: 'thanks' });
});

export default router;
