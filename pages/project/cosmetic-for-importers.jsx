import css from 'sass/pages/project.scss';
import Link from 'next/link';
import PortfolioHead from 'components/PortfolioHead';
import BlockQuote from 'components/BlockQuote';

const Page = () => (
  <div className={css.ProjectWrapper}>
    <PortfolioHead title="Regulatory Support for Cosmetics Importers" />
    <section>
      <h1>Supporting Cosmetics Importers</h1>
      {/* <h1>Product Strategy Overhaul</h1> */}
      <h2>in a Regulatory App for Toxicologists</h2>

      <h3>Project Context</h3>
      <p>
        {'To sell a cosmetics product, a company must fill out regulatory paperwork and conduct dozens of safety studies, with important variations between countries in what\'s legal and what type of evidence is requested. As a result, exporting products to new countries is costly.'}
      </p>
      <BlockQuote float="left">EcoMundo is changing its toxicology expert app to better answer foreign brands' needs.</BlockQuote>
      <p>
        {'EcoMundo historically sells an app for toxicologists to prepare regulatory dossiers optimised for the EU. In recent years, foreign brands who aren\'t familiar with the EU\'s toxicology requirements have expressed interest in the EU market.'}
      </p>
      <p>
        {'To answer this demand, EcoMundo has chosen to re-align its toxicologist app into a product that helps export cosmetics across the world. Two major changes were decided: the app should help users predict the regulatory compliance of a product, and it should be simplified to help foreigners complete EU paperwork efficiently.'}
      </p>
    </section>

    <section>
      <h1>Initial Brief</h1>

      <p>
        {'This project is split in two areas. I was asked to optimise an existing UI proposal made by toxicologists for a\
        feature that predicts if a product complies to a regulation, and to do any UX and UI improvements necessary to\
        help foreign brands use the app.'}
      </p>

      <h2>FormulaCheck: Compliance Prediction</h2>
      <p>
        {'The timeline for this part of the project was extremely short, as EcoMundo had to present a working\
        prototype at a business event just weeks from the project start. I had days to come up with proposals and\
        implement them. The feature, released under the name of FormulaCheck, received an Innovation Award\
        at the event where it was presented.'}
      </p>
      <p>
        {'We had a working algorithm that could predict, based on a product\'s composition and some metadata,\
        if a product was legal to sell in the EU. If not, the algorithm was able to tell which article of the EU\
        legislation had been violated.'}
      </p>
      <p>
        {'The project brief included a dashboard to display the overall state of a product line, and UIs to display\
        details about the compliance prediction made by the algorithm.'}
      </p>

      <h2>An App to Outsource Regulatory Work</h2>
      <p>
        {'Initially, I was asked to re-organise the app and improve UIs to simplify adding a product and writing a\
        regulatory dossier. However, sales staff in EcoMundo\'s office in Korea quickly pointed out that foreign\
        brands were so unfamiliar with the EU\'s regulatory concepts they would fail to compile the dossier no\
        matter what. We decided with sales staff to make a new version of the app that only requests clients to\
        input required product information, and that lets EcoMundo\'s own experts perform the scientific work.'}
      </p>
      <p>
        {'We decided with sales staff to make a new version of the app that only requests clients to\
        input required product information, and that lets EcoMundo\'s own experts write regulatory dossiers.\
        EcoMundo reviewed its commercial strategy and started offering outsourcing services for EU product registration.\
        I\'m now going to present the UIs made to support this outsourcing work.'}
      </p>
    </section>

    <section>
      <h1>FormulaCheck &ndash; A Painful Start</h1>

      <h2>Initial UI Constraints</h2>
      <p>This feature started in an unfavourable context, with the following constraints.</p>

      <h4>No Governance</h4>
      <p>Cosmetic Factory, the app to receive the feature, had no product manager and so, stakeholders would fight bitterly to retain control of the design process's outcome. As a new hire, I was asked to mock UIs based on an initial idea of interaction flow and front-end technical constraints, with little creative freedom.</p>

      <h4>Technical Debt</h4>
      <p>
Toxicologists needed a dashboard listing all watched products and a screen that would display computation results for a given product and regulation. Their vision was influenced by technical debt in Cosmetic Factory: the feature had to hold in a single screen, with a central area, a side area, and at most one level of depth of popups.
      </p>

      <h4>Time Constraints</h4>
      <p>Finally, the product timeline made it risky to use components that weren't already available, and biased the initial UI proposals towards existing data representations.</p>

      <h2>Potential for Improvements</h2>
      <p>
      After the initial iteration, I took upon myself to re-analyse the UI specifically with foreign importers in mind, and noticed a handful of issues. I'll present them below with the second iteration of the UIs.
      </p>
    </section>

    <section>
      <h1>The FormulaCheck UI</h1>
      <h2>Initial Dashboard</h2>
      <div className={css.FullscreenBox}>
        <img src="/static/images/project/cosmetics/formulacheck-dashboard.png" className={css.FullscreenBoxLeftPadded} alt="The FormulaCheck dashboard features a table where each line shows a product, and its compliance state for all supported regulations. A legend is present to explain the meanings of icons. Clicking on a row reveals details for the row's product." />
      </div>
      <h2>Initial Product Result Screen</h2>
      <div className={css.FullscreenBox}>
        <img src="/static/images/project/cosmetics/formulacheck-results1.png" className={css.FullscreenBoxLeftPadded} alt="TODO" />
      </div>
      <h2>Initial Ingredient Details Screen</h2>
      <div className={css.FullscreenBox}>
        <img src="/static/images/project/cosmetics/formulacheck-results2.png" className={css.FullscreenBoxLeftPadded} alt="TODO" />
      </div>
    </section>


    <section>
      <h1>Improving the UIs for Importers</h1>
      <p>
        {'I identified the following problems on the initial UI with a quick walkthrough, focusing on the perspective \
        of a foreign brand importing products into the EU with little local knowledge.'}
      </p>

      <h2>Dashboard</h2>

      <h3>UI Issues</h3>
      <ul>
        <li>Like all dashboards when I joined EcoMundo, buttons had no text and were using non-universal icons &ndash; it is hard to guess what they do</li>
        <li>Some vertical space could be reclaimed by bundling the legend with other table controls</li>
        <li>Area columns were missing a tooltip with the full area name, leading some Korean users to confuse Canada for California</li>
      </ul>

      <h3>Product / UX Issues</h3>
      <ul>
        <li> The dashboard title wasn't clear, because sales hadn't yet decided if the feature would be part of a regulatory watch feature or a standalone one</li>
        <li> Toxicologists had requested a button to globally pause FormulaCheck, but that was only useful to debug the algorithm &ndash; not for real users</li>
        <li> It is common for a product to be missing information, but the initial UI interpreted all cases and returned the worst result, making every product look non-compliant</li>
        <li> Toxicologists only wanted to see a positive icon for regulated ingredients, because they liked being able to distinguish regulated and unregulated ingredients; importers on the other hand need to distinguish compliant products from products that haven't yet been computed, as they import many products every day</li>
      </ul>

      <h3>Second Revision</h3>
      <div className={css.FullscreenBox}>
        <img src="/static/images/project/cosmetics/corrected/formulacheck-dashboard.png" className={css.FullscreenBoxLeftPadded} alt="TODO" />
      </div>

      <h2>Results Screens</h2>

      <h3>Issues on the Product Results UI</h3>
      <ul>
        <li><em>The use of a grid is deeply inappropriate here: data density is too low, and horizontal space too small to display every column, causing users to miss out on results</em></li>
        <li>The grid layout only works well with the EU regulation; USA results are illegible and occasionally wrong because of the grid's rigid data model</li>
        <li>The column headers use local jargon: annex numbers of the EU's main cosmetics regulation. It's unclear to foreigners what those numbers are</li>
      </ul>

      <h3>Second Revision</h3>
      <div className={css.FullscreenBox}>
        <img src="/static/images/project/cosmetics/corrected/formulacheck-results1.png" className={css.FullscreenBoxLeftPadded} alt="TODO" />
      </div>

      <h3>Issues on the Details Popup</h3>
      <ul>
        <li>The details popup didn't have a scrollbar, making it impossible to interact with it if it's too long or the screen too small</li>
        <li>At the top of the details popup is a tab bar, usually with a single tab in real-world conditions. It's a debugging feature for toxicologists that was forced through to production</li>
        <li>Users aren't told when missing information on their product prevents the algorithm from working; instead, they're told the product is non-compliant</li>
      </ul>

      <h3>Second Revision</h3>
      <div className={css.FullscreenBox}>
        <img src="/static/images/project/cosmetics/corrected/formulacheck-results2.png" className={css.FullscreenBoxLeftPadded} alt="TODO" />
      </div>


    </section>


    <section>
      <h1>Adapting to Foreign Importers</h1>
      <h2>Regulatory Dossiers for the EU</h2>
      <p>
        {'To sell a product in the EU, one must collect data and perform an analysis:'}
      </p>
      <h4>Part A &ndash; Product Data Collection</h4>
      <ol>
        <li>Identifying information: product name and packaging</li>
        <li>Target population (babies, children, adults), product type, method of application</li>
        <li>Evidence to support commercial claims about the product</li>
        <li>Documents describing hygiene and safety procedures in manufacturing plants</li>
        <li>Proof that raw materials aren't contaminated by impurities during manufacturing</li>
        <li>Proof that the packaging is stable and doesn't leak into the product</li>
      </ol>
      <h4>Part A &ndash; Chemical Formula Data Collection</h4>
      <ol>
        <li>Chemical composition of the product, hierarchised in raw materials</li>
        <li>For each raw material and substance, a list of toxicological studies</li>
        <li>Based on ingredient origins (vegetal, synthetic, etc.), additional studies or certificates</li>
      </ol>
      <h4>Part B &ndash; Toxicological Analysis</h4>
      <p>
        {'Based on the provided data for each raw material, and based on study results, toxicologists must\
        compute toxicological margins of safety and ensure they fall below a threshold enshrined in the law.\
        Criterias may vary based on the type of claims made or the target population\'s sensitivity to substances.'}
      </p>
      <h2>The Problem for Foreign Importers</h2>
      <BlockQuote float="right" decoration="dots">Processes differ radically between EU toxicologists and foreign brands.</BlockQuote>
      <p>
        {'EcoMundo\'s original product, Cosmetic Factory, manages nearly all of the above data requirements, but they\
        are scattered across existing UIs. Indeed, in-house toxicologists in EU cosmetics firms '}
        <em>
          {'separate raw material management from formula development and from product commercialisation'}
        </em>
        {'.'}
      </p>
      <p>
        {'In contrast, foreign brands who seek to import in the EU buy pre-made formulas from B2B formulators, package them and\
        sell the packaged products. Because their process differs, the interaction flow of Cosmetic Factory must be adjusted.'}
      </p>
      <h3>Goals</h3>
      <p>We now want a unified interface that:</p>
      <ul>
        <li>guides users through data upload, with principles of least effort and progressive disclosure</li>
        <li>{'informs them when EcoMundo\'s toxicologists have completed the scientific analysis'}</li>
        <li>gives them access to proof of EU registration for their products</li>
      </ul>
    </section>

    <section>
      <h1>The Outsourcing UI</h1>
      <h2>Product Portfolio</h2>
      <div className={css.FullscreenBox}>
        <img src="/static/images/project/cosmetics/outsourcing-portfolio.png" className={css.FullscreenBoxLeftPadded} alt="TODO" />
        <hr />
        <img src="/static/images/project/cosmetics/outsourcing-portfolio-ready.png" className={css.FullscreenBoxLeftPadded} alt="TODO" />
      </div>

      <h2>Product Editor &ndash; Definition & Composition</h2>
      <div className={css.FullscreenBox}>
        <img src="/static/images/project/cosmetics/outsourcing-edit1.png" className={css.FullscreenBoxLeftPadded} alt="TODO" />
        <hr />
        <img src="/static/images/project/cosmetics/outsourcing-edit2.png" className={css.FullscreenBoxLeftPadded} alt="TODO" />
      </div>

      <h2>Product Editor &ndash; Ingredient Origins</h2>
      <div className={css.FullscreenBox}>
        <img src="/static/images/project/cosmetics/outsourcing-edit3.png" className={css.FullscreenBoxLeftPadded} alt="TODO" />
      </div>

      <h2>Product Editor &ndash; Documents</h2>
      <div className={css.FullscreenBox}>
        <img src="/static/images/project/cosmetics/outsourcing-edit6.png" className={css.FullscreenBoxLeftPadded} alt="TODO" />
        <hr />
        <img src="/static/images/project/cosmetics/outsourcing-edit-help.png" className={css.FullscreenBoxLeftPadded} alt="TODO" />
      </div>

    </section>


  </div>
);

export default Page;
