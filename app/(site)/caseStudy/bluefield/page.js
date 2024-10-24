import React from "react";
import CustomButton from "../../../components/common/CustomButton";

const CaseStudyPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Hero Section */}
      <section
        className="relative text-center py-20 bg-cover bg-center rounded-lg shadow-lg"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?technology')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Blue Field System for Enhanced Field Operations Management
          </h1>
          <p className="text-lg text-gray-200">
            Transforming Field Operations for ONEIC with Real-Time Task
            Management, Asset Tracking, and Customized Dashboards
          </p>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-4 border-blue-500 inline-block pb-2">
          Client Overview
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed">
          <p>
            <strong>Client:</strong> ONEIC (Field Service Management Company)
          </p>
          <p>
            <strong>Industry:</strong> Field Operations Management
          </p>
          <p>
            ONEIC required a robust solution to streamline and manage various
            operational activities, including task assignments, asset tracking,
            and user roles.
          </p>
        </div>
      </section>

      {/* Project Background */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-4 border-blue-500 inline-block pb-2">
          Project Background
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed">
          <p>
            To manage their field operations effectively, ONEIC needed a system
            that would handle task assignments, asset tracking, user management,
            and reporting. Rytsense Technologies designed{" "}
            <strong>Blue Field</strong> with core features like customizable
            dashboards, map views, task management, user roles, reporting, and
            file management.
          </p>
        </div>
      </section>

      {/* Project Objectives */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-4 border-blue-500 inline-block pb-2">
          Project Objectives
        </h2>
        <ul className="bg-white p-6 rounded-lg shadow-md list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>Streamline task assignments and tracking.</li>
          <li>Enhance user role management with RBAC.</li>
          <li>
            Improve reporting capabilities for insights on field operations and
            asset utilization.
          </li>
          <li>Enable asset tracking, assignment, and maintenance.</li>
          <li>
            Personalize user experiences with custom dashboards and
            notifications.
          </li>
        </ul>
      </section>

      {/* Solution Highlights */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-4 border-blue-500 inline-block pb-2">
          Solution Highlights
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              Dashboard Customization & KPIs
            </h3>
            <p>
              Customizable dashboards for viewing KPIs and task-specific views.
              The Select Chart Type feature enabled data aggregation through
              sum, count, and average methods.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              Map View and Task Management
            </h3>
            <p>
              Real-time map visualization for tracking field agents and
              assigning tasks within specific geographical regions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              User Roles and Workflow Management
            </h3>
            <p>
              RBAC for defining roles and tracking user activity, ensuring
              secure access to system features.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              Reports and Data Analysis
            </h3>
            <p>
              Custom reports with performance metrics and actionable insights
              generated from data analysis tools.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              Asset Management
            </h3>
            <p>
              Tracking asset status, assignment, and maintenance schedules to
              ensure optimal resource utilization.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-4 border-blue-500 inline-block pb-2">
          Challenges & Solutions
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              User Role Management Complexity
            </h3>
            <p>
              Overcoming the complexity of RBAC required detailed planning to
              ensure secure and efficient role-based access.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              Real-Time Task Tracking
            </h3>
            <p>
              Maintaining real-time accuracy for geographical task data was a
              key challenge, resolved through optimized geolocation services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              Customization Demands
            </h3>
            <p>
              Providing a highly flexible dashboard and reporting customization
              capability to meet diverse user needs.
            </p>
          </div>
        </div>
      </section>

      {/* Results and Impact */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-4 border-blue-500 inline-block pb-2">
          Results and Impact
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed bg-white p-6 rounded-lg shadow-md space-y-2">
          <li>
            50% reduction in task assignment time due to enhanced geographical
            filtering.
          </li>
          <li>
            30% improvement in asset utilization through optimized tracking and
            management.
          </li>
          <li>
            Significant increase in user productivity due to personalized
            dashboards and streamlined workflows.
          </li>
          <li>
            Improved decision-making enabled by data-driven insights and custom
            reports.
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-4 border-blue-500 inline-block pb-2">
          Conclusion
        </h2>
        <p className="text-gray-700 leading-relaxed bg-white p-6 rounded-lg shadow-md">
          The implementation of <strong>Blue Field</strong> empowered ONEIC to
          streamline their field operations with real-time task tracking,
          enhanced asset management, and powerful reporting tools. The RBAC
          system ensured secure system usage, while the customizable dashboards
          allowed the system to adapt to the clients needs.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Ready to Transform Your Operations?
        </h2>
        <p className="text-lg text-blue-200 mb-6">
          Contact us today to learn how we can help streamline your operations
          with customized solutions.
        </p>
      <div className="flex justify-center">
      <CustomButton title={"Lets connect"}/>
      </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
