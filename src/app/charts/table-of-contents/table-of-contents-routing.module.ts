import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DodgeCoxEquityComponent } from "./dodge-cox-equity/dodge-cox-equity.component";
import { ConsultingteamComponent } from "./consultingteam/consultingteam.component";
import { TotalfundComponent } from "./totalfund/totalfund.component";
import { TableOfContentsComponent } from "./table-of-contents.component";
import { ManagerReviewComponent } from "./manager-review/manager-review.component";
import { TotalperfbenchmarkComponent } from "./totalperfbenchmark/totalperfbenchmark.component";
import { TotalfundAttributionComponent } from "./totalfund-attribution/totalfund-attribution.component";
import { SectorAttributionComponent } from "./sector-attribution/sector-attribution.component";
import { SectorWeightingComponent } from "./sector-weighting/sector-weighting.component";
import { SectorGrowthValueComponent } from "./sector-growth-value/sector-growth-value.component";
import { MgrPerfVsPeersComponent } from "./mgr-perf-vs-peers/mgr-perf-vs-peers.component";
import { GlossaryComponent } from "./glossary/glossary.component";
import { PerfResultsComponent } from "./perf-results/perf-results.component";
import { RiskAnalysisComponent } from "./risk-analysis/risk-analysis.component";
import { PerfCalendarYearComponent } from "./perf-calendar-year/perf-calendar-year.component";
import { PerfToObjectivesComponent } from "./perf-to-objectives/perf-to-objectives.component";
import { ReturnsBasedAnalysisComponent } from "./returns-based-analysis/returns-based-analysis.component";
import { DomEquityMgrComparisonsComponent } from "./dom-equity-mgr-comparisons/dom-equity-mgr-comparisons.component";
import { IntlEquityMgrComparisonsComponent } from "./intl-equity-mgr-comparisons/intl-equity-mgr-comparisons.component";
import { DomFixedIncomeCompComponent } from "./dom-fixed-income-comp/dom-fixed-income-comp.component";
import { DCLongTermPerfComponent } from "./dodge-cox-equity/d-c-long-term-perf/d-c-long-term-perf.component";
import { DCMgrRiskAnalysisComponent } from "./dodge-cox-equity/d-c-mgr-risk-analysis/d-c-mgr-risk-analysis.component";
import { DCAnnualPerfComponent } from "./dodge-cox-equity/d-c-annual-perf/d-c-annual-perf.component";
import { SitLongTermPerfComponent } from "./sit-inv-assc/sit-long-term-perf/sit-long-term-perf.component";
import { SitMgrRiskAnalysisComponent } from "./sit-inv-assc/sit-mgr-risk-analysis/sit-mgr-risk-analysis.component";
import { SitAnnualPerfComponent } from "./sit-inv-assc/sit-annual-perf/sit-annual-perf.component";
import { FMLongTermPerfComponent } from "./fiduciary-mgmt/f-m-long-term-perf/f-m-long-term-perf.component";
import { FMMgrRiskComponent } from "./fiduciary-mgmt/f-m-mgr-risk/f-m-mgr-risk.component";
import { FMAnnualPerfComponent } from "./fiduciary-mgmt/f-m-annual-perf/f-m-annual-perf.component";
import { MsLongTermPerfComponent } from "./morgan-stanley-intl-equity/ms-long-term-perf/ms-long-term-perf.component";
import { MsMgrRiskAnalysisComponent } from "./morgan-stanley-intl-equity/ms-mgr-risk-analysis/ms-mgr-risk-analysis.component";
import { MsAnnualPerfComponent } from "./morgan-stanley-intl-equity/ms-annual-perf/ms-annual-perf.component";
import { LamLongTermPerfComponent } from "./lazard-asset-mgmt/lam-long-term-perf/lam-long-term-perf.component";
import { LamAnnualPerfComponent } from "./lazard-asset-mgmt/lam-annual-perf/lam-annual-perf.component";
import { MsEmergingLongTermPerfComponent } from "./morgan-stanley-emerging-mkts/ms-emerging-long-term-perf/ms-emerging-long-term-perf.component";
import { MsEmergingMgrRiskComponent } from "./morgan-stanley-emerging-mkts/ms-emerging-mgr-risk/ms-emerging-mgr-risk.component";
import { MsEmergingAnnualPerfComponent } from "./morgan-stanley-emerging-mkts/ms-emerging-annual-perf/ms-emerging-annual-perf.component";
import { LsLongTermPerfComponent } from "./loomis-sayles/ls-long-term-perf/ls-long-term-perf.component";
import { LsMgrRiskAnalysisComponent } from "./loomis-sayles/ls-mgr-risk-analysis/ls-mgr-risk-analysis.component";
import { LsAnnualPerfComponent } from "./loomis-sayles/ls-annual-perf/ls-annual-perf.component";
import { RreefLongTermPerfComponent } from "./RREEF-II-III/rreef-long-term-perf/rreef-long-term-perf.component";
import { RreefMgrRiskAnalysisComponent } from "./RREEF-II-III/rreef-mgr-risk-analysis/rreef-mgr-risk-analysis.component";
import { RreefAnnualPerfComponent } from "./RREEF-II-III/rreef-annual-perf/rreef-annual-perf.component";
import { TcLongTermPerfComponent } from "./tortoise-cap/tc-long-term-perf/tc-long-term-perf.component";
import { TcAnnualPerfComponent } from "./tortoise-cap/tc-annual-perf/tc-annual-perf.component";
import { NrLongTermPerfComponent } from "./natural-resources/nr-long-term-perf/nr-long-term-perf.component";
import { NrMgrRiskAnalysisComponent } from "./natural-resources/nr-mgr-risk-analysis/nr-mgr-risk-analysis.component";
import { NrAnnualPerfComponent } from "./natural-resources/nr-annual-perf/nr-annual-perf.component";
import { UbsLongTermPerfComponent } from "./UBS-neutral-alpha/ubs-long-term-perf/ubs-long-term-perf.component";
import { UbsAnnualPerfComponent } from "./UBS-neutral-alpha/ubs-annual-perf/ubs-annual-perf.component";
import { AcLongTermPerfComponent } from "./abbot-capital/ac-long-term-perf/ac-long-term-perf.component";
import { AcMgrRiskAnalysisComponent } from "./abbot-capital/ac-mgr-risk-analysis/ac-mgr-risk-analysis.component";
import { AcAnnualPerfComponent } from "./abbot-capital/ac-annual-perf/ac-annual-perf.component";
import { CipMgrRiskAnalysisComponent } from "./commonfund-intl-pe/cip-mgr-risk-analysis/cip-mgr-risk-analysis.component";
import { CipLongTermPerfComponent } from "./commonfund-intl-pe/cip-long-term-perf/cip-long-term-perf.component";
import { CipAnnualPerfComponent } from "./commonfund-intl-pe/cip-annual-perf/cip-annual-perf.component";
import { CvLongTermPerfComponent } from "./commonfund-vp/cv-long-term-perf/cv-long-term-perf.component";
import { CvMgrRiskAnalysisComponent } from "./commonfund-vp/cv-mgr-risk-analysis/cv-mgr-risk-analysis.component";
import { CvAnnualPerfComponent } from "./commonfund-vp/cv-annual-perf/cv-annual-perf.component";
import { CpLongTermPerfComponent } from "./commonfund-pe/cp-long-term-perf/cp-long-term-perf.component";
import { CpMgrRiskAnalysisComponent } from "./commonfund-pe/cp-mgr-risk-analysis/cp-mgr-risk-analysis.component";
import { CpAnnualPerfComponent } from "./commonfund-pe/cp-annual-perf/cp-annual-perf.component";
import { CcpLongTermPerfComponent } from "./commonfund-cap-partners/ccp-long-term-perf/ccp-long-term-perf.component";
import { CcpMgrRiskAnalysisComponent } from "./commonfund-cap-partners/ccp-mgr-risk-analysis/ccp-mgr-risk-analysis.component";
import { CcpAnnualPerfComponent } from "./commonfund-cap-partners/ccp-annual-perf/ccp-annual-perf.component";
import { TotalFundAssetAllocChartsComponent } from "./total-fund-asset-alloc-charts/total-fund-asset-alloc-charts.component";

const routes: Routes = [
  {
    path: "",
    component: TableOfContentsComponent,
    data: {
      pageTitle: "Table of Contents"
    },
    children: [
      {
        path: "consultingteam",
        component: ConsultingteamComponent,
        data: { pageTitle: "Consulting Team" }
      },
      {
        path: "totalfund",
        component: TotalfundComponent,
        data: {
          pageTitle: "Total Fund Performance Review - Asset Allocation Summary"
        }
      },
      {
        path: "totalfundgraphs",
        component: TotalFundAssetAllocChartsComponent,
        data: {
          pageTitle:
            "Total Fund Performance Review - Asset Allocation Summary Graphs"
        }
      },
      {
        path: "manager-review",
        component: ManagerReviewComponent,
        data: { pageTitle: "Manager Review" }
      },
      {
        path: "total-perf-benchmarks",
        component: TotalperfbenchmarkComponent,
        data: {
          pageTitle: "Total Fund Performance Review - Performance & Benchmarks"
        }
      },
      {
        path: "total-fund-attribution",
        component: TotalfundAttributionComponent,
        data: { pageTitle: "Total Fund Performance Review - Attribution" }
      },
      {
        path: "sector-attribution",
        component: SectorAttributionComponent,
        data: { pageTitle: "Sector Attribution & Allocation" }
      },
      {
        path: "sector-weighting",
        component: SectorWeightingComponent,
        data: { pageTitle: "Sector Weighting" }
      },
      {
        path: "sector-growth-value",
        component: SectorGrowthValueComponent,
        data: { pageTitle: "Sector Growth vs. Value" }
      },
      {
        path: "mgr-perf-vs-peers",
        component: MgrPerfVsPeersComponent,
        data: { pageTitle: "Manager Performance vs. Peers" }
      },
      {
        path: "glossary",
        component: GlossaryComponent,
        data: { pageTitle: "Glossary" }
      },
      {
        path: "perf-results",
        component: PerfResultsComponent,
        data: { pageTitle: "Performance Results" }
      },
      {
        path: "risk-analysis",
        component: RiskAnalysisComponent,
        data: { pageTitle: "Risk Analysis" }
      },
      {
        path: "perf-calendar-year",
        component: PerfCalendarYearComponent,
        data: { pageTitle: "Performance by Calendar Year" }
      },
      {
        path: "perf-to-objective",
        component: PerfToObjectivesComponent,
        data: { pageTitle: "Performance to Objectives" }
      },
      {
        path: "returns-based",
        component: ReturnsBasedAnalysisComponent,
        data: { pageTitle: "Returns Based Manager Style Analysis" }
      },
      {
        path: "dom-equity-comparisons",
        component: DomEquityMgrComparisonsComponent,
        data: {
          pageTitle: "Domestic Equity Manager Style Universe Comparisons"
        }
      },
      {
        path: "intl-equity-comparisons",
        component: IntlEquityMgrComparisonsComponent,
        data: {
          pageTitle: "International Equity Manager Style Universe Comparisons"
        }
      },
      {
        path: "dom-fixedincome-comparisons",
        component: DomFixedIncomeCompComponent,
        data: {
          pageTitle: "Domestic Fixed Income Manager Style Universe Comparisons"
        }
      },
      {
        path: "dodge-cox-equity",
        component: DodgeCoxEquityComponent,
        data: { pageTitle: "Dodge & Cox Equity" }
      },
      {
        path: "d&c-long-term-perf",
        component: DCLongTermPerfComponent,
        data: { pageTitle: "Dodge & Cox Long Term Performance" }
      },
      {
        path: "d&c-mgr-risk-analysis",
        component: DCMgrRiskAnalysisComponent,
        data: { pageTitle: "Dodge & Cox Manager Risk Analysis" }
      },
      {
        path: "d&c-annual-perf",
        component: DCAnnualPerfComponent,
        data: { pageTitle: "Dodge & Cox Annual Performance" }
      },
      {
        path: "sit-long-term-perf",
        component: SitLongTermPerfComponent,
        data: { pageTitle: "SIT Inv Assc Long Term Performance" }
      },
      {
        path: "sit-mgr-risk-analysis",
        component: SitMgrRiskAnalysisComponent,
        data: { pageTitle: "SIT Inv Assc Manager Risk Analysis" }
      },
      {
        path: "sit-annual-perf",
        component: SitAnnualPerfComponent,
        data: { pageTitle: "SIT Annual Performance" }
      },
      {
        path: "f-m-long-term-perf",
        component: FMLongTermPerfComponent,
        data: { pageTitle: "Fiduciary Management Long Term Performance" }
      },
      {
        path: "f-m-mgr-risk-analysis",
        component: FMMgrRiskComponent,
        data: { pageTitle: "Fiduciary Management Manager Risk Analysis" }
      },
      {
        path: "f-m-annual-perf",
        component: FMAnnualPerfComponent,
        data: { pageTitle: "Fiduciary Management Annual Performance" }
      },
      {
        path: "ms-intl-long-term-perf",
        component: MsLongTermPerfComponent,
        data: { pageTitle: "Morgan Stanley Intl Equity Long Term Performance" }
      },
      {
        path: "ms-intl-mgr-risk-analysis",
        component: MsMgrRiskAnalysisComponent,
        data: { pageTitle: "Morgan Stanley Intl Equity Manager Risk Analysis" }
      },
      {
        path: "ms-intl-annual-perf",
        component: MsAnnualPerfComponent,
        data: { pageTitle: "Morgan Stanley Intl Equity Annual Performance" }
      },
      {
        path: "lam-long-term-perf",
        component: LamLongTermPerfComponent,
        data: { pageTitle: "Lazard Asset Mgmt Long Term Performance" }
      },
      {
        path: "lam-annual-perf",
        component: LamAnnualPerfComponent,
        data: { pageTitle: "Lazard Asset Mgmt Annual Performance" }
      },
      {
        path: "ms-emerging-long-term-perf",
        component: MsEmergingLongTermPerfComponent,
        data: {
          pageTitle: "Morgan Stanley Emerging Mkts Long Term Performance"
        }
      },
      {
        path: "ms-emerging-mgr-risk-analysis",
        component: MsEmergingMgrRiskComponent,
        data: {
          pageTitle: "Morgan Stanley Emerging Mkts Manager Risk Analysis"
        }
      },
      {
        path: "ms-emerging-annual-perf",
        component: MsEmergingAnnualPerfComponent,
        data: { pageTitle: "Morgan Stanley Emerging Mkts Annual Performance" }
      },
      {
        path: "ls-long-term-perf",
        component: LsLongTermPerfComponent,
        data: { pageTitle: "Loomis Sayles Co. Long Term Performance" }
      },
      {
        path: "ls-mgr-risk-anaylsis",
        component: LsMgrRiskAnalysisComponent,
        data: { pageTitle: "Loomis Sayles Co. Manager Risk Analysis" }
      },
      {
        path: "ls-annual-perf",
        component: LsAnnualPerfComponent,
        data: { pageTitle: "Loomis Sayles Co. Annual Performance" }
      },
      {
        path: "rreef-long-term-perf",
        component: RreefLongTermPerfComponent,
        data: { pageTitle: "RREEF II & III Long Term Performance" }
      },
      {
        path: "rreef-mgr-risk-analysis",
        component: RreefMgrRiskAnalysisComponent,
        data: { pageTitle: "RREEF II & III Mgr Risk Analysis" }
      },
      {
        path: "rreef-annual-perf",
        component: RreefAnnualPerfComponent,
        data: { pageTitle: "RREEF II & III Annual Performance" }
      },
      {
        path: "tc-long-term-perf",
        component: TcLongTermPerfComponent,
        data: { pageTitle: "Tortoise Capital Long Term Performance" }
      },
      {
        path: "tc-annual-perf",
        component: TcAnnualPerfComponent,
        data: { pageTitle: "Tortoise Capital Annual Performance" }
      },
      {
        path: "nr-long-term-perf",
        component: NrLongTermPerfComponent,
        data: { pageTitle: "Natural Resources VIII Long TermPerformance" }
      },
      {
        path: "nr-mgr-risk-analysis",
        component: NrMgrRiskAnalysisComponent,
        data: { pageTitle: "Natural Resources VIII Mgr Risk Analysis" }
      },
      {
        path: "nr-annual-perf",
        component: NrAnnualPerfComponent,
        data: { pageTitle: "Natural Resources VIII Annual Performance" }
      },
      {
        path: "ubs-long-term-perf",
        component: UbsLongTermPerfComponent,
        data: {
          pageTitle: "UBS Netural Alpha Strategies Long Term Performance"
        }
      },
      {
        path: "ubs-annual-perf",
        component: UbsAnnualPerfComponent,
        data: { pageTitle: "UBS Netural Alpha Strategies Annual Performance" }
      },
      {
        path: "ac-long-term-perf",
        component: AcLongTermPerfComponent,
        data: { pageTitle: "Abbot Capital Private Equity Long TermPerformance" }
      },
      {
        path: "ac-mgr-risk-analysis",
        component: AcMgrRiskAnalysisComponent,
        data: { pageTitle: "Abbot Capital Private Equity Mgr Risk Analysis" }
      },
      {
        path: "ac-annual-perf",
        component: AcAnnualPerfComponent,
        data: { pageTitle: "Abbot Capital Private Equity Annual Performance" }
      },
      {
        path: "cip-long-term-perf",
        component: CipLongTermPerfComponent,
        data: { pageTitle: "Commonfund Intl PE VII Long TermPerformance" }
      },
      {
        path: "cip-mgr-risk-analysis",
        component: CipMgrRiskAnalysisComponent,
        data: { pageTitle: "Commonfund Intl PE VII Mgr Risk Analysis" }
      },
      {
        path: "cip-annual-perf",
        component: CipAnnualPerfComponent,
        data: { pageTitle: "Commonfund Intl PE VII Annual Performance" }
      },
      {
        path: "cv-long-term-perf",
        component: CvLongTermPerfComponent,
        data: { pageTitle: "Commonfund VP IX Long TermPerformance" }
      },
      {
        path: "cv-mgr-risk-analysis",
        component: CvMgrRiskAnalysisComponent,
        data: { pageTitle: "Commonfund VP IX VII Mgr Risk Analysis" }
      },
      {
        path: "cv-annual-perf",
        component: CvAnnualPerfComponent,
        data: { pageTitle: "Commonfund VP IX VII Annual Performance" }
      },
      {
        path: "cp-long-term-perf",
        component: CpLongTermPerfComponent,
        data: { pageTitle: "Commonfund PE VIII Long TermPerformance" }
      },
      {
        path: "cp-mgr-risk-analysis",
        component: CpMgrRiskAnalysisComponent,
        data: { pageTitle: "Commonfund PE VIII Mgr Risk Analysis" }
      },
      {
        path: "cp-annual-perf",
        component: CpAnnualPerfComponent,
        data: { pageTitle: "Commonfund PE VIII Annual Performance" }
      },
      {
        path: "ccp-long-term-perf",
        component: CcpLongTermPerfComponent,
        data: {
          pageTitle: "Commonfund Capital Partners V Long TermPerformance"
        }
      },
      {
        path: "ccp-mgr-risk-analysis",
        component: CcpMgrRiskAnalysisComponent,
        data: { pageTitle: "Commonfund Capital Partners V Mgr Risk Analysis" }
      },
      {
        path: "ccp-annual-perf",
        component: CcpAnnualPerfComponent,
        data: { pageTitle: "Commonfund Capital Partners V Annual Performance" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class TableofContentsRoutingModule {}
