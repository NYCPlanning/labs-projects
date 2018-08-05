import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | repository-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('model',  {
      "id": 57321301,
      "node_id": "MDEwOlJlcG9zaXRvcnk1NzMyMTMwMQ==",
      "name": "labs-postgis-preview",
      "full_name": "NYCPlanning/labs-postgis-preview",
      "owner": {
        "login": "NYCPlanning",
        "id": 18286928,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjE4Mjg2OTI4",
        "avatar_url": "https://avatars1.githubusercontent.com/u/18286928?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/NYCPlanning",
        "html_url": "https://github.com/NYCPlanning",
        "followers_url": "https://api.github.com/users/NYCPlanning/followers",
        "following_url": "https://api.github.com/users/NYCPlanning/following{/other_user}",
        "gists_url": "https://api.github.com/users/NYCPlanning/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/NYCPlanning/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/NYCPlanning/subscriptions",
        "organizations_url": "https://api.github.com/users/NYCPlanning/orgs",
        "repos_url": "https://api.github.com/users/NYCPlanning/repos",
        "events_url": "https://api.github.com/users/NYCPlanning/events{/privacy}",
        "received_events_url": "https://api.github.com/users/NYCPlanning/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/NYCPlanning/labs-postgis-preview",
      "description": "A lightweight express app and leaflet frontend for previewing PostGIS queries",
      "fork": false,
      "url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview",
      "forks_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/forks",
      "keys_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/teams",
      "hooks_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/hooks",
      "issue_events_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/issues/events{/number}",
      "events_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/events",
      "assignees_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/assignees{/user}",
      "branches_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/branches{/branch}",
      "tags_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/tags",
      "blobs_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/languages",
      "stargazers_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/stargazers",
      "contributors_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/contributors",
      "subscribers_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/subscribers",
      "subscription_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/subscription",
      "commits_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/contents/{+path}",
      "compare_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/merges",
      "archive_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/downloads",
      "issues_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/issues{/number}",
      "pulls_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/labels{/name}",
      "releases_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/releases{/id}",
      "deployments_url": "https://api.github.com/repos/NYCPlanning/labs-postgis-preview/deployments",
      "created_at": "2016-04-28T17:27:38Z",
      "updated_at": "2018-08-05T03:32:57Z",
      "pushed_at": "2018-08-05T03:32:59Z",
      "git_url": "git://github.com/NYCPlanning/labs-postgis-preview.git",
      "ssh_url": "git@github.com:NYCPlanning/labs-postgis-preview.git",
      "clone_url": "https://github.com/NYCPlanning/labs-postgis-preview.git",
      "svn_url": "https://github.com/NYCPlanning/labs-postgis-preview",
      "homepage": null,
      "size": 296,
      "stargazers_count": 191,
      "watchers_count": 191,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 38,
      "mirror_url": null,
      "archived": false,
      "open_issues_count": 17,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 38,
      "open_issues": 17,
      "watchers": 191,
      "default_branch": "develop",
      "score": 4.9847627
    });

    // Template block usage:
    await render(hbs`
      {{#repository-card model=model}}
        template block text
      {{/repository-card}}
    `);

    assert.ok(this.element);
  });
});
