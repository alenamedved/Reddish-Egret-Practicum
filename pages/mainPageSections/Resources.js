import React from "react";
import Layout from "../../components/Layout";

const Resources = () => {
  return (
    <Layout>
      <div>
        <h2>
          These resources can be invaluable assets for social workers engaging
          with immigrant and refugee clients.
        </h2>
        <p>
          Consider using the following resources, which include toolkits,
          informational pages, guides, and organizational websites, broken down by
          issue area:
        </p>
        <ul>
          <li>Education</li>
          <li>Employment </li>
          <li>Health</li>
          <li>Housing and Resettlement</li>
          <li>Legal Safety</li>
        </ul>

        <a
          href="https://www.onlinemswprograms.com/resources/social-issues/support-resources-immigrants-refugees/"
          style={{ color: "blue" }}
          target={"_blank"}
          rel="noreferrer"
        >
          Follow the Link
        </a>
        <hr />

      </div>
    </Layout>
  );
};

export default Resources;
