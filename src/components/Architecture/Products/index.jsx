import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Products = () => {

   return (
      <section className="hero-cr section-padding" >
         <div className="container"></div>
         <div className="row">
            <Tabs>
               <TabList>
                  <Tab>Title 1</Tab>
                  <Tab>Title 2</Tab>
               </TabList>

               <TabPanel>
                  <h2>Any content 1</h2>
               </TabPanel>
               <TabPanel>
                  <h2>Any content 2</h2>
               </TabPanel>
            </Tabs>
         </div>
      </section >
   )
}

export default Products