import * as awsx from "@pulumi/awsx";
import * as pulumi from "@pulumi/pulumi";

// common code from before trimmed out
const repository = new awsx.ecr.Repository("sample");

// Invoke 'docker' to actually build the DockerFile that is in the 'app' folder relative to
// this program. Once built, push that image up to our personal ECR repo.
const image = repository.buildAndPushImage("./app")

const service = new awsx.ecs.FargateService("service", {
    // ... common code from before trimmed out
    taskDefinitionArgs: {
        containers: {
            service: {
                image: image,
            },
        },
    },
});