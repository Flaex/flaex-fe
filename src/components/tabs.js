import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabComponent = ({ colecciones, icons }) => {
  /* eslint-disable */

  return (
    <div className="tabs">
      {colecciones.map((tab) => (
        <Tabs key={tab.id}>
          <h2>{tab.titulo}</h2>
          <TabList>
            <Tab>
              <FontAwesomeIcon
                icon={["fas", icons[0]]}
                fixedWidth
                size="lg"
              />
            </Tab>
            <Tab>
              <FontAwesomeIcon
                icon={["fas", icons[1]]}
                fixedWidth
                size="lg"
              />
            </Tab>
          </TabList>
          <TabPanel>
            <ReactMarkdown
              children={tab.texto}
              remarkPlugins={[remarkGfm]}
              skipHtml={true}
            />
          </TabPanel>
          <TabPanel>
            <ReactMarkdown
              children={tab.lista}
              remarkPlugins={[remarkGfm]}
              skipHtml={true}
            />
          </TabPanel>
        </Tabs>
      ))}
    </div>
  );
};

export default TabComponent;
