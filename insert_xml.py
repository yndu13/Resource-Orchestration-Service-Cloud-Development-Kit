import argparse
from xml.dom.minidom import parse

parser = argparse.ArgumentParser()
parser.add_argument('--pom_file_path', type=str, default=None)
args = parser.parse_args()
pom_file_path = args.pom_file_path


def get_xml_root_node():
    dom_tree = parse(pom_file_path)
    root_node = dom_tree.documentElement

    return dom_tree, root_node


def write_xml():
    dom_tree, root_node = get_xml_root_node()
    # write repositories
    repositories_node = dom_tree.createElement("repositories")
    repository_node = dom_tree.createElement("repository")
    repository_id_node = dom_tree.createElement("id")
    repository_id_text_value = dom_tree.createTextNode("sonatype-nexus-staging")
    repository_id_node.appendChild(repository_id_text_value)
    repository_url_node = dom_tree.createElement("url")
    repository_url_text_value = dom_tree.createTextNode("https://oss.sonatype.org/service/local/staging/deploy/maven2/")
    repository_url_node.appendChild(repository_url_text_value)
    repository_node.appendChild(repository_id_node)
    repository_node.appendChild(repository_url_node)
    repositories_node.appendChild(repository_node)
    root_node.appendChild(repositories_node)

    # write distributionManagement
    distribution_management_node = dom_tree.createElement("distributionManagement")
    # write snapshotRepository
    snapshot_repository_node = dom_tree.createElement("snapshotRepository")
    snapshot_repository_id_node = dom_tree.createElement("id")
    snapshot_repository_id_text_value = dom_tree.createTextNode("sonatype-nexus-snapshots")
    snapshot_repository_id_node.appendChild(snapshot_repository_id_text_value)
    snapshot_repository_url_node = dom_tree.createElement("url")
    snapshot_repository_url_text_value = dom_tree.createTextNode(
        "https://oss.sonatype.org/content/repositories/snapshots")
    snapshot_repository_url_node.appendChild(snapshot_repository_url_text_value)
    snapshot_repository_node.appendChild(snapshot_repository_id_node)
    snapshot_repository_node.appendChild(snapshot_repository_url_node)

    distribution_management_repository_node = dom_tree.createElement("repository")
    distribution_management_repository_id_node = dom_tree.createElement("id")
    distribution_management_repository_id_text_value = dom_tree.createTextNode("sonatype-nexus-staging")
    distribution_management_repository_id_node.appendChild(distribution_management_repository_id_text_value)
    distribution_management_repository_url_node = dom_tree.createElement("url")
    distribution_management_repository_url_text_value = dom_tree.createTextNode(
        "https://oss.sonatype.org/service/local/staging/deploy/maven2/")
    distribution_management_repository_url_node.appendChild(distribution_management_repository_url_text_value)
    distribution_management_repository_node.appendChild(distribution_management_repository_id_node)
    distribution_management_repository_node.appendChild(distribution_management_repository_url_node)

    distribution_management_node.appendChild(distribution_management_repository_node)
    distribution_management_node.appendChild(snapshot_repository_node)
    root_node.appendChild(distribution_management_node)

    # write resource
    builds = root_node.getElementsByTagName("build")[0]
    resources_node = dom_tree.createElement("resources")
    resource_node = dom_tree.createElement("resource")
    directory_node = dom_tree.createElement("directory")
    directory_text_value = dom_tree.createTextNode("src/main/java")
    directory_node.appendChild(directory_text_value)
    resource_node.appendChild(directory_node)
    includes_node = dom_tree.createElement("includes")
    include_1_node = dom_tree.createElement("include")
    include_2_node = dom_tree.createElement("include")
    include_1_node_text_value = dom_tree.createTextNode("**/*.tgz")
    include_2_node_text_value = dom_tree.createTextNode("**/*.txt")
    include_1_node.appendChild(include_1_node_text_value)
    include_2_node.appendChild(include_2_node_text_value)
    includes_node.appendChild(include_1_node)
    includes_node.appendChild(include_2_node)
    resource_node.appendChild(includes_node)
    filtering_node = dom_tree.createElement("filtering")
    filtering_node_text_value = dom_tree.createTextNode("false")
    filtering_node.appendChild(filtering_node_text_value)
    resource_node.appendChild(filtering_node)
    resources_node.appendChild(resource_node)
    builds.appendChild(resources_node)

    # write plugin
    plugins_node = root_node.getElementsByTagName("plugins")[0]
    plugin_1_node = dom_tree.createElement("plugin")
    plugin_1_artifact_id_node = dom_tree.createElement("artifactId")
    plugin_1_version_node = dom_tree.createElement("version")
    plugin_1_artifact_id_node_text_value = dom_tree.createTextNode("maven-deploy-plugin")
    plugin_1_version_node_text_value = dom_tree.createTextNode("2.8.1")
    plugin_1_artifact_id_node.appendChild(plugin_1_artifact_id_node_text_value)
    plugin_1_version_node.appendChild(plugin_1_version_node_text_value)
    plugin_1_node.appendChild(plugin_1_artifact_id_node)
    plugin_1_node.appendChild(plugin_1_version_node)

    plugin_2_node = dom_tree.createElement("plugin")
    plugin_2_group_id_node = dom_tree.createElement("groupId")
    plugin_2_artifact_id_node = dom_tree.createElement("artifactId")
    plugin_2_version_node = dom_tree.createElement("version")
    plugin_2_group_id_node_text_value = dom_tree.createTextNode("org.apache.maven.plugins")
    plugin_2_artifact_id_node_text_value = dom_tree.createTextNode("maven-gpg-plugin")
    plugin_2_version_node_text_value = dom_tree.createTextNode("1.6")
    plugin_2_group_id_node.appendChild(plugin_2_group_id_node_text_value)
    plugin_2_artifact_id_node.appendChild(plugin_2_artifact_id_node_text_value)
    plugin_2_version_node.appendChild(plugin_2_version_node_text_value)
    plugin_2_node.appendChild(plugin_2_group_id_node)
    plugin_2_node.appendChild(plugin_2_artifact_id_node)
    plugin_2_node.appendChild(plugin_2_version_node)
    plugin_2_executions_node = dom_tree.createElement("executions")
    plugin_2_execution_node = dom_tree.createElement("execution")
    plugin_2_execution_id_node = dom_tree.createElement("id")
    plugin_2_execution_phase_node = dom_tree.createElement("phase")
    plugin_2_execution_id_node_text_value = dom_tree.createTextNode("sign-artifacts")
    plugin_2_execution_phase_node_text_value = dom_tree.createTextNode("verify")
    plugin_2_execution_id_node.appendChild(plugin_2_execution_id_node_text_value)
    plugin_2_execution_phase_node.appendChild(plugin_2_execution_phase_node_text_value)

    plugin_2_execution_goals_node = dom_tree.createElement("goals")
    plugin_2_execution_goal_node = dom_tree.createElement("goal")
    plugin_2_execution_goal_node_text_value = dom_tree.createTextNode("sign")
    plugin_2_execution_goal_node.appendChild(plugin_2_execution_goal_node_text_value)
    plugin_2_execution_goals_node.appendChild(plugin_2_execution_goal_node)
    plugin_2_execution_node.appendChild(plugin_2_execution_id_node)
    plugin_2_execution_node.appendChild(plugin_2_execution_phase_node)
    plugin_2_execution_node.appendChild(plugin_2_execution_goals_node)
    plugin_2_executions_node.appendChild(plugin_2_execution_node)
    plugin_2_node.appendChild(plugin_2_executions_node)
    plugins_node.appendChild(plugin_1_node)
    plugins_node.appendChild(plugin_2_node)

    # write executions
    artifact_id_nodes = root_node.getElementsByTagName("artifactId")
    for artifact_id_node in artifact_id_nodes:
        if artifact_id_node.childNodes[0].data == "maven-compiler-plugin":
            new_plugin_id_node = artifact_id_node.parentNode
            plugin_executions_node = dom_tree.createElement("executions")
            plugin_execution_node = dom_tree.createElement("execution")
            plugin_execution_id_node = dom_tree.createElement("id")
            plugin_execution_id_node_text_value = dom_tree.createTextNode("attach-javadocs")
            plugin_execution_id_node.appendChild(plugin_execution_id_node_text_value)
            plugin_execution_configuration_node = dom_tree.createElement("configuration")
            plugin_execution_additionalparam_node = dom_tree.createElement("additionalparam")
            plugin_execution_additionalparam_node_text_value = dom_tree.createTextNode("-Xdoclint:none")
            plugin_execution_additionalparam_node.appendChild(plugin_execution_additionalparam_node_text_value)
            plugin_execution_configuration_node.appendChild(plugin_execution_additionalparam_node)
            plugin_execution_node.appendChild(plugin_execution_id_node)
            plugin_execution_node.appendChild(plugin_execution_configuration_node)
            plugin_executions_node.appendChild(plugin_execution_node)
            new_plugin_id_node.appendChild(plugin_executions_node)

    with open(pom_file_path, 'w') as f:
        dom_tree.writexml(f, addindent=' ', newl='\t', encoding='utf-8')


if __name__ == '__main__':
    write_xml()
