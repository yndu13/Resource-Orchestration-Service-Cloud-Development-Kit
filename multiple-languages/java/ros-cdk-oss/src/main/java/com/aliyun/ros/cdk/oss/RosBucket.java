package com.aliyun.ros.cdk.oss;

/**
 * A ROS template type:  `ALIYUN::OSS::Bucket`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.145Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket")
public class RosBucket extends com.aliyun.ros.cdk.core.RosResource {

    protected RosBucket(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosBucket(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.oss.RosBucket.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::OSS::Bucket`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosBucket(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.RosBucketProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternalDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrInternalDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagManager getTags() {
        return software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TagManager.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getBucketName() {
        return software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setBucketName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bucketName", java.util.Objects.requireNonNull(value, "bucketName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAccessControl() {
        return software.amazon.jsii.Kernel.get(this, "accessControl", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAccessControl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessControl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCorsConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "corsConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCorsConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.CORSConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "corsConfiguration", value);
    }

    /**
     */
    public void setCorsConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "corsConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLifecycleConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "lifecycleConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLifecycleConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lifecycleConfiguration", value);
    }

    /**
     */
    public void setLifecycleConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.LifecycleConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "lifecycleConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoggingConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "loggingConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoggingConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loggingConfiguration", value);
    }

    /**
     */
    public void setLoggingConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.LoggingConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "loggingConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policy", value);
    }

    /**
     */
    public void setPolicy(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "policy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRefererConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "refererConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRefererConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "refererConfiguration", value);
    }

    /**
     */
    public void setRefererConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.RefererConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "refererConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServerSideEncryptionConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "serverSideEncryptionConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServerSideEncryptionConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serverSideEncryptionConfiguration", value);
    }

    /**
     */
    public void setServerSideEncryptionConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.ServerSideEncryptionConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "serverSideEncryptionConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getStorageClass() {
        return software.amazon.jsii.Kernel.get(this, "storageClass", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setStorageClass(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "storageClass", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWebsiteConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "websiteConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWebsiteConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "websiteConfiguration", value);
    }

    /**
     */
    public void setWebsiteConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.WebsiteConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "websiteConfiguration", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty")
    @software.amazon.jsii.Jsii.Proxy(AbortMultipartUploadProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AbortMultipartUploadProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getCreatedBeforeDate() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getDays() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AbortMultipartUploadProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AbortMultipartUploadProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AbortMultipartUploadProperty> {
            private java.lang.String createdBeforeDate;
            private java.lang.Number days;

            /**
             * Sets the value of {@link AbortMultipartUploadProperty#getCreatedBeforeDate}
             * @param createdBeforeDate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder createdBeforeDate(java.lang.String createdBeforeDate) {
                this.createdBeforeDate = createdBeforeDate;
                return this;
            }

            /**
             * Sets the value of {@link AbortMultipartUploadProperty#getDays}
             * @param days the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder days(java.lang.Number days) {
                this.days = days;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AbortMultipartUploadProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AbortMultipartUploadProperty build() {
                return new Jsii$Proxy(createdBeforeDate, days);
            }
        }

        /**
         * An implementation for {@link AbortMultipartUploadProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AbortMultipartUploadProperty {
            private final java.lang.String createdBeforeDate;
            private final java.lang.Number days;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.createdBeforeDate = software.amazon.jsii.Kernel.get(this, "createdBeforeDate", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.days = software.amazon.jsii.Kernel.get(this, "days", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String createdBeforeDate, final java.lang.Number days) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.createdBeforeDate = createdBeforeDate;
                this.days = days;
            }

            @Override
            public final java.lang.String getCreatedBeforeDate() {
                return this.createdBeforeDate;
            }

            @Override
            public final java.lang.Number getDays() {
                return this.days;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCreatedBeforeDate() != null) {
                    data.set("createdBeforeDate", om.valueToTree(this.getCreatedBeforeDate()));
                }
                if (this.getDays() != null) {
                    data.set("days", om.valueToTree(this.getDays()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AbortMultipartUploadProperty.Jsii$Proxy that = (AbortMultipartUploadProperty.Jsii$Proxy) o;

                if (this.createdBeforeDate != null ? !this.createdBeforeDate.equals(that.createdBeforeDate) : that.createdBeforeDate != null) return false;
                return this.days != null ? this.days.equals(that.days) : that.days == null;
            }

            @Override
            public final int hashCode() {
                int result = this.createdBeforeDate != null ? this.createdBeforeDate.hashCode() : 0;
                result = 31 * result + (this.days != null ? this.days.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(CORSConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CORSConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCorsRule() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CORSConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CORSConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CORSConfigurationProperty> {
            private java.lang.Object corsRule;

            /**
             * Sets the value of {@link CORSConfigurationProperty#getCorsRule}
             * @param corsRule the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder corsRule(com.aliyun.ros.cdk.core.IResolvable corsRule) {
                this.corsRule = corsRule;
                return this;
            }

            /**
             * Sets the value of {@link CORSConfigurationProperty#getCorsRule}
             * @param corsRule the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder corsRule(java.util.List<? extends java.lang.Object> corsRule) {
                this.corsRule = corsRule;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CORSConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CORSConfigurationProperty build() {
                return new Jsii$Proxy(corsRule);
            }
        }

        /**
         * An implementation for {@link CORSConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CORSConfigurationProperty {
            private final java.lang.Object corsRule;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.corsRule = software.amazon.jsii.Kernel.get(this, "corsRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object corsRule) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.corsRule = corsRule;
            }

            @Override
            public final java.lang.Object getCorsRule() {
                return this.corsRule;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCorsRule() != null) {
                    data.set("corsRule", om.valueToTree(this.getCorsRule()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CORSConfigurationProperty.Jsii$Proxy that = (CORSConfigurationProperty.Jsii$Proxy) o;

                return this.corsRule != null ? this.corsRule.equals(that.corsRule) : that.corsRule == null;
            }

            @Override
            public final int hashCode() {
                int result = this.corsRule != null ? this.corsRule.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty")
    @software.amazon.jsii.Jsii.Proxy(CORSRuleProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CORSRuleProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getAllowedHeader() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getAllowedMethod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getAllowedOrigin() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getExposeHeader() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getMaxAgeSeconds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CORSRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CORSRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CORSRuleProperty> {
            private java.util.List<java.lang.String> allowedHeader;
            private java.util.List<java.lang.String> allowedMethod;
            private java.util.List<java.lang.String> allowedOrigin;
            private java.util.List<java.lang.String> exposeHeader;
            private java.lang.Number maxAgeSeconds;

            /**
             * Sets the value of {@link CORSRuleProperty#getAllowedHeader}
             * @param allowedHeader the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowedHeader(java.util.List<java.lang.String> allowedHeader) {
                this.allowedHeader = allowedHeader;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getAllowedMethod}
             * @param allowedMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowedMethod(java.util.List<java.lang.String> allowedMethod) {
                this.allowedMethod = allowedMethod;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getAllowedOrigin}
             * @param allowedOrigin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowedOrigin(java.util.List<java.lang.String> allowedOrigin) {
                this.allowedOrigin = allowedOrigin;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getExposeHeader}
             * @param exposeHeader the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exposeHeader(java.util.List<java.lang.String> exposeHeader) {
                this.exposeHeader = exposeHeader;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getMaxAgeSeconds}
             * @param maxAgeSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxAgeSeconds(java.lang.Number maxAgeSeconds) {
                this.maxAgeSeconds = maxAgeSeconds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CORSRuleProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CORSRuleProperty build() {
                return new Jsii$Proxy(allowedHeader, allowedMethod, allowedOrigin, exposeHeader, maxAgeSeconds);
            }
        }

        /**
         * An implementation for {@link CORSRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CORSRuleProperty {
            private final java.util.List<java.lang.String> allowedHeader;
            private final java.util.List<java.lang.String> allowedMethod;
            private final java.util.List<java.lang.String> allowedOrigin;
            private final java.util.List<java.lang.String> exposeHeader;
            private final java.lang.Number maxAgeSeconds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.allowedHeader = software.amazon.jsii.Kernel.get(this, "allowedHeader", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.allowedMethod = software.amazon.jsii.Kernel.get(this, "allowedMethod", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.allowedOrigin = software.amazon.jsii.Kernel.get(this, "allowedOrigin", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.exposeHeader = software.amazon.jsii.Kernel.get(this, "exposeHeader", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
                this.maxAgeSeconds = software.amazon.jsii.Kernel.get(this, "maxAgeSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.util.List<java.lang.String> allowedHeader, final java.util.List<java.lang.String> allowedMethod, final java.util.List<java.lang.String> allowedOrigin, final java.util.List<java.lang.String> exposeHeader, final java.lang.Number maxAgeSeconds) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.allowedHeader = allowedHeader;
                this.allowedMethod = allowedMethod;
                this.allowedOrigin = allowedOrigin;
                this.exposeHeader = exposeHeader;
                this.maxAgeSeconds = maxAgeSeconds;
            }

            @Override
            public final java.util.List<java.lang.String> getAllowedHeader() {
                return this.allowedHeader;
            }

            @Override
            public final java.util.List<java.lang.String> getAllowedMethod() {
                return this.allowedMethod;
            }

            @Override
            public final java.util.List<java.lang.String> getAllowedOrigin() {
                return this.allowedOrigin;
            }

            @Override
            public final java.util.List<java.lang.String> getExposeHeader() {
                return this.exposeHeader;
            }

            @Override
            public final java.lang.Number getMaxAgeSeconds() {
                return this.maxAgeSeconds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAllowedHeader() != null) {
                    data.set("allowedHeader", om.valueToTree(this.getAllowedHeader()));
                }
                if (this.getAllowedMethod() != null) {
                    data.set("allowedMethod", om.valueToTree(this.getAllowedMethod()));
                }
                if (this.getAllowedOrigin() != null) {
                    data.set("allowedOrigin", om.valueToTree(this.getAllowedOrigin()));
                }
                if (this.getExposeHeader() != null) {
                    data.set("exposeHeader", om.valueToTree(this.getExposeHeader()));
                }
                if (this.getMaxAgeSeconds() != null) {
                    data.set("maxAgeSeconds", om.valueToTree(this.getMaxAgeSeconds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CORSRuleProperty.Jsii$Proxy that = (CORSRuleProperty.Jsii$Proxy) o;

                if (this.allowedHeader != null ? !this.allowedHeader.equals(that.allowedHeader) : that.allowedHeader != null) return false;
                if (this.allowedMethod != null ? !this.allowedMethod.equals(that.allowedMethod) : that.allowedMethod != null) return false;
                if (this.allowedOrigin != null ? !this.allowedOrigin.equals(that.allowedOrigin) : that.allowedOrigin != null) return false;
                if (this.exposeHeader != null ? !this.exposeHeader.equals(that.exposeHeader) : that.exposeHeader != null) return false;
                return this.maxAgeSeconds != null ? this.maxAgeSeconds.equals(that.maxAgeSeconds) : that.maxAgeSeconds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.allowedHeader != null ? this.allowedHeader.hashCode() : 0;
                result = 31 * result + (this.allowedMethod != null ? this.allowedMethod.hashCode() : 0);
                result = 31 * result + (this.allowedOrigin != null ? this.allowedOrigin.hashCode() : 0);
                result = 31 * result + (this.exposeHeader != null ? this.exposeHeader.hashCode() : 0);
                result = 31 * result + (this.maxAgeSeconds != null ? this.maxAgeSeconds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty")
    @software.amazon.jsii.Jsii.Proxy(ExpirationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ExpirationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getCreatedBeforeDate() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDate() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getDays() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ExpirationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ExpirationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ExpirationProperty> {
            private java.lang.String createdBeforeDate;
            private java.lang.String date;
            private java.lang.Number days;

            /**
             * Sets the value of {@link ExpirationProperty#getCreatedBeforeDate}
             * @param createdBeforeDate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder createdBeforeDate(java.lang.String createdBeforeDate) {
                this.createdBeforeDate = createdBeforeDate;
                return this;
            }

            /**
             * Sets the value of {@link ExpirationProperty#getDate}
             * @param date the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder date(java.lang.String date) {
                this.date = date;
                return this;
            }

            /**
             * Sets the value of {@link ExpirationProperty#getDays}
             * @param days the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder days(java.lang.Number days) {
                this.days = days;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ExpirationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ExpirationProperty build() {
                return new Jsii$Proxy(createdBeforeDate, date, days);
            }
        }

        /**
         * An implementation for {@link ExpirationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ExpirationProperty {
            private final java.lang.String createdBeforeDate;
            private final java.lang.String date;
            private final java.lang.Number days;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.createdBeforeDate = software.amazon.jsii.Kernel.get(this, "createdBeforeDate", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.date = software.amazon.jsii.Kernel.get(this, "date", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.days = software.amazon.jsii.Kernel.get(this, "days", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String createdBeforeDate, final java.lang.String date, final java.lang.Number days) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.createdBeforeDate = createdBeforeDate;
                this.date = date;
                this.days = days;
            }

            @Override
            public final java.lang.String getCreatedBeforeDate() {
                return this.createdBeforeDate;
            }

            @Override
            public final java.lang.String getDate() {
                return this.date;
            }

            @Override
            public final java.lang.Number getDays() {
                return this.days;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCreatedBeforeDate() != null) {
                    data.set("createdBeforeDate", om.valueToTree(this.getCreatedBeforeDate()));
                }
                if (this.getDate() != null) {
                    data.set("date", om.valueToTree(this.getDate()));
                }
                if (this.getDays() != null) {
                    data.set("days", om.valueToTree(this.getDays()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ExpirationProperty.Jsii$Proxy that = (ExpirationProperty.Jsii$Proxy) o;

                if (this.createdBeforeDate != null ? !this.createdBeforeDate.equals(that.createdBeforeDate) : that.createdBeforeDate != null) return false;
                if (this.date != null ? !this.date.equals(that.date) : that.date != null) return false;
                return this.days != null ? this.days.equals(that.days) : that.days == null;
            }

            @Override
            public final int hashCode() {
                int result = this.createdBeforeDate != null ? this.createdBeforeDate.hashCode() : 0;
                result = 31 * result + (this.date != null ? this.date.hashCode() : 0);
                result = 31 * result + (this.days != null ? this.days.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(LifecycleConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LifecycleConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRule();

        /**
         * @return a {@link Builder} of {@link LifecycleConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LifecycleConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LifecycleConfigurationProperty> {
            private java.lang.Object rule;

            /**
             * Sets the value of {@link LifecycleConfigurationProperty#getRule}
             * @param rule the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
                this.rule = rule;
                return this;
            }

            /**
             * Sets the value of {@link LifecycleConfigurationProperty#getRule}
             * @param rule the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rule(java.util.List<? extends java.lang.Object> rule) {
                this.rule = rule;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LifecycleConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LifecycleConfigurationProperty build() {
                return new Jsii$Proxy(rule);
            }
        }

        /**
         * An implementation for {@link LifecycleConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LifecycleConfigurationProperty {
            private final java.lang.Object rule;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object rule) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.rule = java.util.Objects.requireNonNull(rule, "rule is required");
            }

            @Override
            public final java.lang.Object getRule() {
                return this.rule;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("rule", om.valueToTree(this.getRule()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LifecycleConfigurationProperty.Jsii$Proxy that = (LifecycleConfigurationProperty.Jsii$Proxy) o;

                return this.rule.equals(that.rule);
            }

            @Override
            public final int hashCode() {
                int result = this.rule.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(LoggingConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LoggingConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getTargetBucket() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getTargetPrefix() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LoggingConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LoggingConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LoggingConfigurationProperty> {
            private java.lang.String targetBucket;
            private java.lang.String targetPrefix;

            /**
             * Sets the value of {@link LoggingConfigurationProperty#getTargetBucket}
             * @param targetBucket the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetBucket(java.lang.String targetBucket) {
                this.targetBucket = targetBucket;
                return this;
            }

            /**
             * Sets the value of {@link LoggingConfigurationProperty#getTargetPrefix}
             * @param targetPrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetPrefix(java.lang.String targetPrefix) {
                this.targetPrefix = targetPrefix;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LoggingConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LoggingConfigurationProperty build() {
                return new Jsii$Proxy(targetBucket, targetPrefix);
            }
        }

        /**
         * An implementation for {@link LoggingConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LoggingConfigurationProperty {
            private final java.lang.String targetBucket;
            private final java.lang.String targetPrefix;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.targetBucket = software.amazon.jsii.Kernel.get(this, "targetBucket", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.targetPrefix = software.amazon.jsii.Kernel.get(this, "targetPrefix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String targetBucket, final java.lang.String targetPrefix) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.targetBucket = targetBucket;
                this.targetPrefix = targetPrefix;
            }

            @Override
            public final java.lang.String getTargetBucket() {
                return this.targetBucket;
            }

            @Override
            public final java.lang.String getTargetPrefix() {
                return this.targetPrefix;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getTargetBucket() != null) {
                    data.set("targetBucket", om.valueToTree(this.getTargetBucket()));
                }
                if (this.getTargetPrefix() != null) {
                    data.set("targetPrefix", om.valueToTree(this.getTargetPrefix()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LoggingConfigurationProperty.Jsii$Proxy that = (LoggingConfigurationProperty.Jsii$Proxy) o;

                if (this.targetBucket != null ? !this.targetBucket.equals(that.targetBucket) : that.targetBucket != null) return false;
                return this.targetPrefix != null ? this.targetPrefix.equals(that.targetPrefix) : that.targetPrefix == null;
            }

            @Override
            public final int hashCode() {
                int result = this.targetBucket != null ? this.targetBucket.hashCode() : 0;
                result = 31 * result + (this.targetPrefix != null ? this.targetPrefix.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(RefererConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RefererConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllowEmptyReferer() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRefererList() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RefererConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RefererConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RefererConfigurationProperty> {
            private java.lang.Object allowEmptyReferer;
            private java.lang.Object refererList;

            /**
             * Sets the value of {@link RefererConfigurationProperty#getAllowEmptyReferer}
             * @param allowEmptyReferer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowEmptyReferer(java.lang.Boolean allowEmptyReferer) {
                this.allowEmptyReferer = allowEmptyReferer;
                return this;
            }

            /**
             * Sets the value of {@link RefererConfigurationProperty#getAllowEmptyReferer}
             * @param allowEmptyReferer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowEmptyReferer(com.aliyun.ros.cdk.core.IResolvable allowEmptyReferer) {
                this.allowEmptyReferer = allowEmptyReferer;
                return this;
            }

            /**
             * Sets the value of {@link RefererConfigurationProperty#getRefererList}
             * @param refererList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder refererList(java.util.List<? extends java.lang.Object> refererList) {
                this.refererList = refererList;
                return this;
            }

            /**
             * Sets the value of {@link RefererConfigurationProperty#getRefererList}
             * @param refererList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder refererList(com.aliyun.ros.cdk.core.IResolvable refererList) {
                this.refererList = refererList;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RefererConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RefererConfigurationProperty build() {
                return new Jsii$Proxy(allowEmptyReferer, refererList);
            }
        }

        /**
         * An implementation for {@link RefererConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RefererConfigurationProperty {
            private final java.lang.Object allowEmptyReferer;
            private final java.lang.Object refererList;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.allowEmptyReferer = software.amazon.jsii.Kernel.get(this, "allowEmptyReferer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.refererList = software.amazon.jsii.Kernel.get(this, "refererList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object allowEmptyReferer, final java.lang.Object refererList) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.allowEmptyReferer = allowEmptyReferer;
                this.refererList = refererList;
            }

            @Override
            public final java.lang.Object getAllowEmptyReferer() {
                return this.allowEmptyReferer;
            }

            @Override
            public final java.lang.Object getRefererList() {
                return this.refererList;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAllowEmptyReferer() != null) {
                    data.set("allowEmptyReferer", om.valueToTree(this.getAllowEmptyReferer()));
                }
                if (this.getRefererList() != null) {
                    data.set("refererList", om.valueToTree(this.getRefererList()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RefererConfigurationProperty.Jsii$Proxy that = (RefererConfigurationProperty.Jsii$Proxy) o;

                if (this.allowEmptyReferer != null ? !this.allowEmptyReferer.equals(that.allowEmptyReferer) : that.allowEmptyReferer != null) return false;
                return this.refererList != null ? this.refererList.equals(that.refererList) : that.refererList == null;
            }

            @Override
            public final int hashCode() {
                int result = this.allowEmptyReferer != null ? this.allowEmptyReferer.hashCode() : 0;
                result = 31 * result + (this.refererList != null ? this.refererList.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.RuleProperty")
    @software.amazon.jsii.Jsii.Proxy(RuleProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RuleProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getPrefix();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAbortMultipartUpload() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExpiration() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getStatus() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RuleProperty> {
            private java.lang.String prefix;
            private java.lang.Object abortMultipartUpload;
            private java.lang.Object expiration;
            private java.lang.String id;
            private java.lang.String status;

            /**
             * Sets the value of {@link RuleProperty#getPrefix}
             * @param prefix the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefix(java.lang.String prefix) {
                this.prefix = prefix;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getAbortMultipartUpload}
             * @param abortMultipartUpload the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder abortMultipartUpload(com.aliyun.ros.cdk.core.IResolvable abortMultipartUpload) {
                this.abortMultipartUpload = abortMultipartUpload;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getAbortMultipartUpload}
             * @param abortMultipartUpload the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder abortMultipartUpload(com.aliyun.ros.cdk.oss.RosBucket.AbortMultipartUploadProperty abortMultipartUpload) {
                this.abortMultipartUpload = abortMultipartUpload;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getExpiration}
             * @param expiration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expiration(com.aliyun.ros.cdk.core.IResolvable expiration) {
                this.expiration = expiration;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getExpiration}
             * @param expiration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expiration(com.aliyun.ros.cdk.oss.RosBucket.ExpirationProperty expiration) {
                this.expiration = expiration;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getId}
             * @param id the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder id(java.lang.String id) {
                this.id = id;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getStatus}
             * @param status the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(java.lang.String status) {
                this.status = status;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RuleProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RuleProperty build() {
                return new Jsii$Proxy(prefix, abortMultipartUpload, expiration, id, status);
            }
        }

        /**
         * An implementation for {@link RuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleProperty {
            private final java.lang.String prefix;
            private final java.lang.Object abortMultipartUpload;
            private final java.lang.Object expiration;
            private final java.lang.String id;
            private final java.lang.String status;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.prefix = software.amazon.jsii.Kernel.get(this, "prefix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.abortMultipartUpload = software.amazon.jsii.Kernel.get(this, "abortMultipartUpload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.expiration = software.amazon.jsii.Kernel.get(this, "expiration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.id = software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String prefix, final java.lang.Object abortMultipartUpload, final java.lang.Object expiration, final java.lang.String id, final java.lang.String status) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.prefix = java.util.Objects.requireNonNull(prefix, "prefix is required");
                this.abortMultipartUpload = abortMultipartUpload;
                this.expiration = expiration;
                this.id = id;
                this.status = status;
            }

            @Override
            public final java.lang.String getPrefix() {
                return this.prefix;
            }

            @Override
            public final java.lang.Object getAbortMultipartUpload() {
                return this.abortMultipartUpload;
            }

            @Override
            public final java.lang.Object getExpiration() {
                return this.expiration;
            }

            @Override
            public final java.lang.String getId() {
                return this.id;
            }

            @Override
            public final java.lang.String getStatus() {
                return this.status;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("prefix", om.valueToTree(this.getPrefix()));
                if (this.getAbortMultipartUpload() != null) {
                    data.set("abortMultipartUpload", om.valueToTree(this.getAbortMultipartUpload()));
                }
                if (this.getExpiration() != null) {
                    data.set("expiration", om.valueToTree(this.getExpiration()));
                }
                if (this.getId() != null) {
                    data.set("id", om.valueToTree(this.getId()));
                }
                if (this.getStatus() != null) {
                    data.set("status", om.valueToTree(this.getStatus()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.RuleProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RuleProperty.Jsii$Proxy that = (RuleProperty.Jsii$Proxy) o;

                if (!prefix.equals(that.prefix)) return false;
                if (this.abortMultipartUpload != null ? !this.abortMultipartUpload.equals(that.abortMultipartUpload) : that.abortMultipartUpload != null) return false;
                if (this.expiration != null ? !this.expiration.equals(that.expiration) : that.expiration != null) return false;
                if (this.id != null ? !this.id.equals(that.id) : that.id != null) return false;
                return this.status != null ? this.status.equals(that.status) : that.status == null;
            }

            @Override
            public final int hashCode() {
                int result = this.prefix.hashCode();
                result = 31 * result + (this.abortMultipartUpload != null ? this.abortMultipartUpload.hashCode() : 0);
                result = 31 * result + (this.expiration != null ? this.expiration.hashCode() : 0);
                result = 31 * result + (this.id != null ? this.id.hashCode() : 0);
                result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(ServerSideEncryptionConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServerSideEncryptionConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getSseAlgorithm();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getKmsMasterKeyId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ServerSideEncryptionConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServerSideEncryptionConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServerSideEncryptionConfigurationProperty> {
            private java.lang.String sseAlgorithm;
            private java.lang.String kmsMasterKeyId;

            /**
             * Sets the value of {@link ServerSideEncryptionConfigurationProperty#getSseAlgorithm}
             * @param sseAlgorithm the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sseAlgorithm(java.lang.String sseAlgorithm) {
                this.sseAlgorithm = sseAlgorithm;
                return this;
            }

            /**
             * Sets the value of {@link ServerSideEncryptionConfigurationProperty#getKmsMasterKeyId}
             * @param kmsMasterKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kmsMasterKeyId(java.lang.String kmsMasterKeyId) {
                this.kmsMasterKeyId = kmsMasterKeyId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServerSideEncryptionConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServerSideEncryptionConfigurationProperty build() {
                return new Jsii$Proxy(sseAlgorithm, kmsMasterKeyId);
            }
        }

        /**
         * An implementation for {@link ServerSideEncryptionConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServerSideEncryptionConfigurationProperty {
            private final java.lang.String sseAlgorithm;
            private final java.lang.String kmsMasterKeyId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.sseAlgorithm = software.amazon.jsii.Kernel.get(this, "sseAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.kmsMasterKeyId = software.amazon.jsii.Kernel.get(this, "kmsMasterKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String sseAlgorithm, final java.lang.String kmsMasterKeyId) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.sseAlgorithm = java.util.Objects.requireNonNull(sseAlgorithm, "sseAlgorithm is required");
                this.kmsMasterKeyId = kmsMasterKeyId;
            }

            @Override
            public final java.lang.String getSseAlgorithm() {
                return this.sseAlgorithm;
            }

            @Override
            public final java.lang.String getKmsMasterKeyId() {
                return this.kmsMasterKeyId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("sseAlgorithm", om.valueToTree(this.getSseAlgorithm()));
                if (this.getKmsMasterKeyId() != null) {
                    data.set("kmsMasterKeyId", om.valueToTree(this.getKmsMasterKeyId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServerSideEncryptionConfigurationProperty.Jsii$Proxy that = (ServerSideEncryptionConfigurationProperty.Jsii$Proxy) o;

                if (!sseAlgorithm.equals(that.sseAlgorithm)) return false;
                return this.kmsMasterKeyId != null ? this.kmsMasterKeyId.equals(that.kmsMasterKeyId) : that.kmsMasterKeyId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.sseAlgorithm.hashCode();
                result = 31 * result + (this.kmsMasterKeyId != null ? this.kmsMasterKeyId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(WebsiteConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WebsiteConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getErrorDocument() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIndexDocument() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link WebsiteConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WebsiteConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WebsiteConfigurationProperty> {
            private java.lang.String errorDocument;
            private java.lang.String indexDocument;

            /**
             * Sets the value of {@link WebsiteConfigurationProperty#getErrorDocument}
             * @param errorDocument the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorDocument(java.lang.String errorDocument) {
                this.errorDocument = errorDocument;
                return this;
            }

            /**
             * Sets the value of {@link WebsiteConfigurationProperty#getIndexDocument}
             * @param indexDocument the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder indexDocument(java.lang.String indexDocument) {
                this.indexDocument = indexDocument;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link WebsiteConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WebsiteConfigurationProperty build() {
                return new Jsii$Proxy(errorDocument, indexDocument);
            }
        }

        /**
         * An implementation for {@link WebsiteConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WebsiteConfigurationProperty {
            private final java.lang.String errorDocument;
            private final java.lang.String indexDocument;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.errorDocument = software.amazon.jsii.Kernel.get(this, "errorDocument", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.indexDocument = software.amazon.jsii.Kernel.get(this, "indexDocument", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String errorDocument, final java.lang.String indexDocument) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.errorDocument = errorDocument;
                this.indexDocument = indexDocument;
            }

            @Override
            public final java.lang.String getErrorDocument() {
                return this.errorDocument;
            }

            @Override
            public final java.lang.String getIndexDocument() {
                return this.indexDocument;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getErrorDocument() != null) {
                    data.set("errorDocument", om.valueToTree(this.getErrorDocument()));
                }
                if (this.getIndexDocument() != null) {
                    data.set("indexDocument", om.valueToTree(this.getIndexDocument()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WebsiteConfigurationProperty.Jsii$Proxy that = (WebsiteConfigurationProperty.Jsii$Proxy) o;

                if (this.errorDocument != null ? !this.errorDocument.equals(that.errorDocument) : that.errorDocument != null) return false;
                return this.indexDocument != null ? this.indexDocument.equals(that.indexDocument) : that.indexDocument == null;
            }

            @Override
            public final int hashCode() {
                int result = this.errorDocument != null ? this.errorDocument.hashCode() : 0;
                result = 31 * result + (this.indexDocument != null ? this.indexDocument.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oss.RosBucket}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oss.RosBucket> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.oss.RosBucketProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oss.RosBucketProps.Builder();
        }

        /**
         * @return {@code this}
         * @param bucketName This parameter is required.
         */
        public Builder bucketName(final java.lang.String bucketName) {
            this.props.bucketName(bucketName);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessControl This parameter is required.
         */
        public Builder accessControl(final java.lang.String accessControl) {
            this.props.accessControl(accessControl);
            return this;
        }

        /**
         * @return {@code this}
         * @param corsConfiguration This parameter is required.
         */
        public Builder corsConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.CORSConfigurationProperty corsConfiguration) {
            this.props.corsConfiguration(corsConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param corsConfiguration This parameter is required.
         */
        public Builder corsConfiguration(final com.aliyun.ros.cdk.core.IResolvable corsConfiguration) {
            this.props.corsConfiguration(corsConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * @return {@code this}
         * @param lifecycleConfiguration This parameter is required.
         */
        public Builder lifecycleConfiguration(final com.aliyun.ros.cdk.core.IResolvable lifecycleConfiguration) {
            this.props.lifecycleConfiguration(lifecycleConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param lifecycleConfiguration This parameter is required.
         */
        public Builder lifecycleConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.LifecycleConfigurationProperty lifecycleConfiguration) {
            this.props.lifecycleConfiguration(lifecycleConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param loggingConfiguration This parameter is required.
         */
        public Builder loggingConfiguration(final com.aliyun.ros.cdk.core.IResolvable loggingConfiguration) {
            this.props.loggingConfiguration(loggingConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param loggingConfiguration This parameter is required.
         */
        public Builder loggingConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.LoggingConfigurationProperty loggingConfiguration) {
            this.props.loggingConfiguration(loggingConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param policy This parameter is required.
         */
        public Builder policy(final com.aliyun.ros.cdk.core.IResolvable policy) {
            this.props.policy(policy);
            return this;
        }
        /**
         * @return {@code this}
         * @param policy This parameter is required.
         */
        public Builder policy(final java.util.Map<java.lang.String, ? extends java.lang.Object> policy) {
            this.props.policy(policy);
            return this;
        }

        /**
         * @return {@code this}
         * @param refererConfiguration This parameter is required.
         */
        public Builder refererConfiguration(final com.aliyun.ros.cdk.core.IResolvable refererConfiguration) {
            this.props.refererConfiguration(refererConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param refererConfiguration This parameter is required.
         */
        public Builder refererConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.RefererConfigurationProperty refererConfiguration) {
            this.props.refererConfiguration(refererConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param serverSideEncryptionConfiguration This parameter is required.
         */
        public Builder serverSideEncryptionConfiguration(final com.aliyun.ros.cdk.core.IResolvable serverSideEncryptionConfiguration) {
            this.props.serverSideEncryptionConfiguration(serverSideEncryptionConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param serverSideEncryptionConfiguration This parameter is required.
         */
        public Builder serverSideEncryptionConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.ServerSideEncryptionConfigurationProperty serverSideEncryptionConfiguration) {
            this.props.serverSideEncryptionConfiguration(serverSideEncryptionConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageClass This parameter is required.
         */
        public Builder storageClass(final java.lang.String storageClass) {
            this.props.storageClass(storageClass);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param websiteConfiguration This parameter is required.
         */
        public Builder websiteConfiguration(final com.aliyun.ros.cdk.core.IResolvable websiteConfiguration) {
            this.props.websiteConfiguration(websiteConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param websiteConfiguration This parameter is required.
         */
        public Builder websiteConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.WebsiteConfigurationProperty websiteConfiguration) {
            this.props.websiteConfiguration(websiteConfiguration);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.oss.RosBucket}.
         */
        @Override
        public com.aliyun.ros.cdk.oss.RosBucket build() {
            return new com.aliyun.ros.cdk.oss.RosBucket(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}