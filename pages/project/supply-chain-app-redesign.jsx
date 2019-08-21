import css from 'sass/pages/project.scss';
import Link from 'next/link';
import PortfolioHead from 'components/PortfolioHead';
import BlockQuote from 'components/BlockQuote';

const Page = () => (
  <div className={css.ProjectWrapper}>
    <PortfolioHead title="Supply Chain App Redesign" />
    <section>
      <h1>App Redesign</h1>
      {/* <h1>Product Strategy Overhaul</h1> */}
      <h2>Supply Chain Data Collection App</h2>

      <h3>Project Context</h3>
      <p>
        {'Regulation on environmental and health hazards has been growing rapidly in recent years, leaving large firms struggling to comply worldwide. Firms must ensure that every reference they manufacture respect applicable legislations where it\'s sold.'}
      </p>
      <p>
        {'EcoMundo helps its clients outsource the legwork of regulatory compliance: ensuring that one\'s supply chain is compliant to begin with. They contact suppliers of a client and ask them for certificates of compliance.'}
      </p>
      <BlockQuote float="left">To make a profit, EcoMundo must rely on automation.</BlockQuote>
      <p>
        {'For a typical client, EcoMundo contacts hundreds of suppliers about thousands of references. Since regulations change fast, suppliers will often be re-asked for proof of compliance just months after replying.'}
      </p>
      <p>
        {'EcoMundo automated much of their work. A script emails suppliers to invite them to reply on a Web app that allows them to upload certificates of compliance and provide relevant information (e.g. exemptions for a banned substance).'}
      </p>
      <p>
        {'Unfortunately, the service is deeply inefficient. Around 10% of suppliers reply in time. EcoMundo hired fulltime staff who manually phone and email suppliers to make up for the service\'s issues – which isn\'t financially viable.'}
      </p>
    </section>

    <section>
      <h1>Initial Project Discovery</h1>

      <p>
        {'At the start of the project, I was told that '}
        <em>usability issues in the app were responsible for this poor performance</em>
        {'. I was to identify them and redesign the app accordingly.'}
      </p>
      <p>
        {'The lead project manager had already been extracting insights from his team\'s interactions with suppliers, and had some ideas of features and fixes, so we reviewed them together in ~15 hours of unstructured interviews.'}
      </p>
      <BlockQuote decoration="dots">
        {'Interviews focused on finding plausible causes to reported behaviours, and understanding the supplier\'s perspective.'}
      </BlockQuote>
      <p>
        {'The most striking discovery was the '}
        <em>one-sided nature of the relationship</em>
        {' between EcoMundo and suppliers. To change this and foster engagement, we segmented suppliers based on their pain points and '}
        <em>opportunities EcoMundo had to turn their experience around</em>
        {' and provide value in exchange for their time.'}
      </p>
      <p>
        {'We also '}
        <em>{'mapped suppliers\' journey'}</em>
        {' to make sure we had found all the reasons causing them to drop out, and wouldn\'t address the wrong problems down the line.'}
      </p>
      <p>
        {'Then, we started iterating over initial ideas, and generating new ones, using the previous findings to ensure we kept on track.'}
      </p>
    </section>

    <section>
      <h1>Supplier Segmentation</h1>
      <div className={css.Segment}>
        <h3>Sales Departments</h3>
        <img src="/static/images/project/supply-chain-app-redesign/segment-sales.png" alt="" />
        <p>
          {'Most contacts in supplier companies called by EcoMundo were sales or sales support departments. Those have '}
          <em>little regulatory knowledge</em>
          {'. They tend to request extra time when emailed, so they may '}
          <em>obtain certificates of compliance from colleagues</em>
          {' in quality departments.'}
        </p>
      </div>
      <div className={css.Segment}>
        <h3>Large Industrial Groups</h3>
        <img src="/static/images/project/supply-chain-app-redesign/segment-large.png" alt="" />
        <p>
          {'Very large suppliers of chemicals have quality departments to handle requests. These occasionally '}
          <em>email the URL to a database where certificates may be downloaded</em>
          {', and expect EcoMundo to upload the data themselves. After all, not doing the work once per client is the reason those suppliers set up a database!'}
        </p>
      </div>
      <div className={css.Segment}>
        <h3>Distribution Networks</h3>
        <img src="/static/images/project/supply-chain-app-redesign/segment-distribution.png" alt="" />
        <p>
          {'These have little product knowledge, and '}
          <em>they have too many clients to care</em>
          {' about losing one of them. They tend to refuse to reply and email back to '}
          <em>contact the manufacturers instead of them</em>
          {'. Some provide contact details for manufacturers, though that’s not always granted.'}
        </p>
      </div>
    </section>


    <section>
      <h1>How Suppliers Drop Out</h1>
      <div className={css.FullscreenBox}>
        <img src="/static/images/project/supply-chain-app-redesign/typical-replies.png" alt="When contacted, only 10% of suppliers will typically submit the requested data in the app. 25% will ignore EcoMundo. 25% will ask for a delay till they find the information. 15% will state they don't recognise the requested references. 10% will ignore the app and point to a site with certificates. 15% will email the data directly instead." />
        <footnote>* stats are approximative</footnote>
      </div>
      <div className={css.WideBox}>
        <h3>In a typical data collection campaign, roughly 10% of suppliers reply as expected.</h3>
        <p>
          {'6 in 10 suppliers encounter delays or issues, and 1 in 4 give up immediately or ignore EcoMundo\'s requests. Suppliers do struggle to input the requested information into the app, but most have given up before reaching that stage. This forces EcoMundo staff to manually phone and email suppliers to seek out the information.'}
        </p>
        <p>
          {'Since there was no budget for primary research, I performed an informal cognitive walkthrough of the task given to suppliers, with the project lead, to map the suppliers\' journey and try to explain this dropout rate.'}
        </p>
      </div>
    </section>


    <section>
      <h1>Supplier Journey</h1>
      <div className={css.FullscreenBox}>
        <img src="/static/images/project/supply-chain-app-redesign/journey.png" className={css.FullscreenBoxLeftPadded} alt="When suppliers are contacted, the request sent by EcoMundo may be stopped in its track by a variety of UX issues encountered by suppliers, even before they log in into the app. When they get to this stage, authentication and data input are too tedious, providing more opportunities to give up." />
      </div>
    </section>


    <section>
      <h1>Agreeing on a Strategy</h1>
      <p>
        {'The ideas we gathered so far were combined with those of the project staff, CEO and CTO through further interviews. I then '}
        <em>
          {'consolidated the nearly 200 identified ideas into groups based on what value they provided'}
        </em>
        {' (which problem is fixed, whose experience is improved, what opportunity for revenue is created). Ideas critical to a specific supplier segment were also highlighted.'}
      </p>
      <BlockQuote decoration="quote" float="left">200 ideas were consolidated into four strategic initiatives.</BlockQuote>
      <p>
        <em>Four topics emerged:</em>
        {' critical pain points; reply rate optimisations; added value to suppliers; and added transparency for clients. They were adopted as strategic axes for the service, and have become the foundation of its development roadmap.'}
      </p>
      <p>
        {'When this app redesign started, EcoMundo had no product maintenance process or long-term roadmap. I imported the generated insights, ideas, segments and initiatives into a PM tool to help stakeholders trace back how decisions had been made and to help them adjust their plans accordingly as circumstances infirmed some of the insights we\'d formulated.'}
      </p>
      <p>
        {'This PM tool is now being adopted across EcoMundo to maintain all of its digital products.'}
      </p>

    </section>


    <section>
      <h1>Initiatives</h1>
      <h2>For Suppliers</h2>
      <h3>1. Fix Critical Pain Points</h3>
      <p>
        {'This initiative focuses on removing major issues likely to cause disengagement from the app.'}
      </p>
      <ul>
        <li>
          {'Improve usability: simplify submission funnel and limit repetitive input with better interaction patterns'}
        </li>
        <li>
          {'Help suppliers report unrecognised references to clients so those references can be fixed in time'}
        </li>
        <li>
          {'Let suppliers invite colleagues to use the app, to limit risks of dropping out or submitting out-of-channel '}
        </li>
        <li>
          {'Let suppliers know what information is needed for each regulation, and why, so they know what to do'}
        </li>
      </ul>
      <h3>2. Optimise Reply Rate</h3>
      <p>
        {'Optimise out-of-channel interactions, and solve the most salient pain points of each supplier segment.'}
      </p>
      <ul>
        <li>
          {'Localise the app, emails and support to Chinese, as many suppliers are from China'}
        </li>
        <li>
          {'Provide APIs to synchronise with large suppliers\' regulatory databases, and add data import features'}
        </li>
        <li>
          {'Add an in-app chat to support sales departments with little regulatory knowledge'}
        </li>
        <li>
          {'Decrease the time and cost of contacting a supplier manually, with better contact management'}
        </li>
      </ul>

      <h3>3. Provide Value to Suppliers</h3>
      <p>
        {'EcoMundo has a few competitive advantages, that can provide incentives for suppliers to stay on the app.'}
      </p>
      <ul>
        <li>
          {'offer regulatory updates, and alert suppliers when their references are made non-compliant by a new law'}
        </li>
        <li>
          {'Generate certificates of compliance and automatically translate them in dozens of languages'}
        </li>
        <li>
          {'Provide tools to share certificates with other clients'}
        </li>
        <li>
          {'Warn when certificates are about to expire'}
        </li>
        <li>
          {'Add reporting features to help executives monitor compliance in large organisations'}
        </li>
      </ul>

      <h2>For Clients</h2>
      <h3>4. Make the Service more Transparent</h3>
      <p>
        {'Clients don\'t always believe EcoMundo is doing the best to provide the service they pay for, and they need to be regularly explained why delays occur.'}
      </p>
      <ul>
        <li>
          {'Show clients all the contact attempts made by EcoMundo, to prove work is being done'}
        </li>
        <li>
          {'Report more precisely, in statistics and dashboards, the reasons why suppliers are encountering delays'}
        </li>
        <li>
          {'When a supplier\'s name or contact details change, propagate changes to clients so they\'re up-to-date'}
        </li>
        <li>
          {'Help clients provide correct names for references they request, so suppliers won\'t get stuck'}
        </li>
      </ul>
    </section>

    <section>
      <h3>Sorry, this is unfinished.</h3>
      <p>
        {'Find the full version in '}
        <a href="/static/files/Dodier-Lazaro_Portfolio_PRINT.pdf">print quality</a>
        {' or '}
        <a href="/static/files/Dodier-Lazaro_Portfolio_SCREEN.pdf">screen quality</a>
      </p>
    </section>

  </div>
);

export default Page;
