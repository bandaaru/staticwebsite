import React, { useState } from "react";
import { Form, Input, Select, Button, Typography } from "antd";
import "../styles/onboarding.css";

const { Title } = Typography;
const { Option } = Select;

const orgTypes = [
  "Farmer Producer Organization (FPO)",
  "Primary Agricultural Credit Society (PACS)",
  "Financial Institution (Bank/NBFC/MFI)",
  "AgriTech Company",
  "Input Supplier (Seeds, Fertilizers, Machinery, etc.)",
  "Market Buyer / Exporter",
  "Sustainability Partner (Carbon Credit / ESG Compliance)",
  "Other"
];

const partnershipReasons = [
  "Access to digital marketplace for selling inputs or farm produce",
  "Integration of financial services (BNPL, invoice financing, agri loans)",
  "Access to AI-driven supply chain and logistics support",
  "Participation in sustainability initiatives (carbon credit trading, ESG compliance)",
  "Digital transformation of farming operations",
  "Other"
];

const OnboardingForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("https://admin.agrifabrix.in/api/static/Onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Thank you for your interest! We'll get in touch shortly.");
        form.resetFields();
      } else {
        alert(data.error || "Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = () => {
    alert("Please fill all required fields correctly.");
  };

  return (
    <div className="form-wrapper">
      <div className="form-heading-container">
        <Title level={3}>AgriFabriX - Quick Onboarding Form</Title>
      </div>
      <div className="onboarding-form-container">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Contact Person Name"
            name="contactName"
            rules={[{ required: true, message: "Please enter contact name" }]}
            className="small-input"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: "Please enter phone number" }]}
            className="small-input"
          >
            <Input type="tel" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter a valid email", type: "email" },
            ]}
            className="small-input"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Type of Organization"
            name="orgType"
            rules={[{ required: true, message: "Please select at least one type" }]}
          >
            <Select mode="multiple" placeholder="Select organization types">
              {orgTypes.map((type) => (
                <Option key={type} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Primary Reason for Partnering"
            name="partnershipReason"
            rules={[{ required: true, message: "Please select at least one reason" }]}
          >
            <Select mode="multiple" placeholder="Select reasons">
              {partnershipReasons.map((reason) => (
                <Option key={reason} value={reason}>
                  {reason}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}
            >
              {loading ? "Submitting…" : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default OnboardingForm;
