import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "react-tabs/style/react-tabs.css";

const TabComponent = ({ item, icons, clase }) => {
  return (
    <div className="tabs">
      <Tabs>
        <h2>{item.titulo}</h2>
        <TabList>
          <Tab>
            <FontAwesomeIcon icon={["fas", icons[0]]} fixedWidth size="lg" />
          </Tab>
          <Tab>
            <FontAwesomeIcon icon={["fas", icons[1]]} fixedWidth size="lg" />
          </Tab>
        </TabList>
        <TabPanel>
          <ReactMarkdown
            children={item.texto}
            remarkPlugins={[remarkGfm]}
            skipHtml={false}
          />
        </TabPanel>
        <TabPanel>
          <ReactMarkdown
            className={clase}
            children={item.lista}
            remarkPlugins={[remarkGfm]}
            skipHtml={false}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabComponent;
