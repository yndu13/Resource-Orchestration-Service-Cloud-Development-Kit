package com.aliyun.ros.cdk.assembly.schema;

/**
 * Artifact properties for the Construct Tree Artifact.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.16.0 (build 99a3413)", date = "2021-01-13T06:16:13.482Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.TreeArtifactProperties")
@software.amazon.jsii.Jsii.Proxy(TreeArtifactProperties.Jsii$Proxy.class)
public interface TreeArtifactProperties extends software.amazon.jsii.JsiiSerializable {

    /**
     * Filename of the tree artifact.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getFile();

    /**
     * @return a {@link Builder} of {@link TreeArtifactProperties}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TreeArtifactProperties}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TreeArtifactProperties> {
        private java.lang.String file;

        /**
         * Sets the value of {@link TreeArtifactProperties#getFile}
         * @param file Filename of the tree artifact. This parameter is required.
         * @return {@code this}
         */
        public Builder file(java.lang.String file) {
            this.file = file;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TreeArtifactProperties}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TreeArtifactProperties build() {
            return new Jsii$Proxy(file);
        }
    }

    /**
     * An implementation for {@link TreeArtifactProperties}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TreeArtifactProperties {
        private final java.lang.String file;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.file = software.amazon.jsii.Kernel.get(this, "file", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String file) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.file = java.util.Objects.requireNonNull(file, "file is required");
        }

        @Override
        public final java.lang.String getFile() {
            return this.file;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("file", om.valueToTree(this.getFile()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.TreeArtifactProperties"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TreeArtifactProperties.Jsii$Proxy that = (TreeArtifactProperties.Jsii$Proxy) o;

            return this.file.equals(that.file);
        }

        @Override
        public final int hashCode() {
            int result = this.file.hashCode();
            return result;
        }
    }
}