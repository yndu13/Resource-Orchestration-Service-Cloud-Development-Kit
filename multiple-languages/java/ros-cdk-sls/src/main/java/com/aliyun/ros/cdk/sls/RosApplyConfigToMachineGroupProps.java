package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a `ALIYUN::SLS::ApplyConfigToMachineGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.602Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosApplyConfigToMachineGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosApplyConfigToMachineGroupProps.Jsii$Proxy.class)
public interface RosApplyConfigToMachineGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getConfigName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getGroupName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getProjectName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosApplyConfigToMachineGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosApplyConfigToMachineGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosApplyConfigToMachineGroupProps> {
        private java.lang.String configName;
        private java.lang.String groupName;
        private java.lang.String projectName;

        /**
         * Sets the value of {@link RosApplyConfigToMachineGroupProps#getConfigName}
         * @param configName the value to be set.
         * @return {@code this}
         */
        public Builder configName(java.lang.String configName) {
            this.configName = configName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplyConfigToMachineGroupProps#getGroupName}
         * @param groupName the value to be set.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplyConfigToMachineGroupProps#getProjectName}
         * @param projectName the value to be set.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosApplyConfigToMachineGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosApplyConfigToMachineGroupProps build() {
            return new Jsii$Proxy(configName, groupName, projectName);
        }
    }

    /**
     * An implementation for {@link RosApplyConfigToMachineGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosApplyConfigToMachineGroupProps {
        private final java.lang.String configName;
        private final java.lang.String groupName;
        private final java.lang.String projectName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configName = software.amazon.jsii.Kernel.get(this, "configName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String configName, final java.lang.String groupName, final java.lang.String projectName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configName = configName;
            this.groupName = groupName;
            this.projectName = projectName;
        }

        @Override
        public final java.lang.String getConfigName() {
            return this.configName;
        }

        @Override
        public final java.lang.String getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.String getProjectName() {
            return this.projectName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getConfigName() != null) {
                data.set("configName", om.valueToTree(this.getConfigName()));
            }
            if (this.getGroupName() != null) {
                data.set("groupName", om.valueToTree(this.getGroupName()));
            }
            if (this.getProjectName() != null) {
                data.set("projectName", om.valueToTree(this.getProjectName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosApplyConfigToMachineGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosApplyConfigToMachineGroupProps.Jsii$Proxy that = (RosApplyConfigToMachineGroupProps.Jsii$Proxy) o;

            if (this.configName != null ? !this.configName.equals(that.configName) : that.configName != null) return false;
            if (this.groupName != null ? !this.groupName.equals(that.groupName) : that.groupName != null) return false;
            return this.projectName != null ? this.projectName.equals(that.projectName) : that.projectName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configName != null ? this.configName.hashCode() : 0;
            result = 31 * result + (this.groupName != null ? this.groupName.hashCode() : 0);
            result = 31 * result + (this.projectName != null ? this.projectName.hashCode() : 0);
            return result;
        }
    }
}