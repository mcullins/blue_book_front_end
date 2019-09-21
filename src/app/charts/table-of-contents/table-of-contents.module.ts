import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableofContentsRoutingModule } from './table-of-contents-routing.module';
import { ConsultingteamComponent } from './consultingteam/consultingteam.component';
import { TotalfundComponent } from './totalfund/totalfund.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TableOfContentsComponent } from './table-of-contents.component';
import { ManagerReviewComponent } from './manager-review/manager-review.component';
import { ConvertToSpacesPipe } from '../shared-charts/convert-to-spaces.pipe';
import { ConvertToDashPipe } from '../shared-charts/convert-to-dash.pipe';
import { TotalperfbenchmarkComponent } from './totalperfbenchmark/totalperfbenchmark.component';
import { FiveYearReturnGraphComponent } from './totalperfbenchmark/five-year-return-graph/five-year-return-graph.component';
import { TotalfundAttributionComponent } from './totalfund-attribution/totalfund-attribution.component';
import { CumulativeReturnGraphComponent } from './totalfund-attribution/cumulative-return-graph/cumulative-return-graph.component';
import { TotalValueGainedlostGraphComponent } from './totalfund-attribution/total-value-gainedlost-graph/total-value-gainedlost-graph.component';
import { FiveLargestHoldingsReturnsGraphComponent } from './totalfund-attribution/five-largest-holdings-returns-graph/five-largest-holdings-returns-graph.component';
import { AveragePortfolioChartComponent } from './totalfund-attribution/average-portfolio-chart/average-portfolio-chart.component';
import { FiveHighestPriceChangeGraphComponent } from './totalfund-attribution/five-highest-price-change-graph/five-highest-price-change-graph.component';
import { FiveLowestPriceChangeGraphComponent } from './totalfund-attribution/five-lowest-price-change-graph/five-lowest-price-change-graph.component';
import { SectorAttributionComponent } from './sector-attribution/sector-attribution.component';
import { SectorWeightingComponent } from './sector-weighting/sector-weighting.component';
import { SectorGrowthValueComponent } from './sector-growth-value/sector-growth-value.component';
import { MgrPerfVsPeersComponent } from './mgr-perf-vs-peers/mgr-perf-vs-peers.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { PerfResultsComponent } from './perf-results/perf-results.component';
import { RiskAnalysisComponent } from './risk-analysis/risk-analysis.component';
import { TrimLeadZeroPipe } from '../shared-charts/trim-lead-zero.pipe';
import { TrimLeadZeroNegPipe } from '../shared-charts/trim-lead-zero-neg.pipe';
import { TwoDecimalPipe } from '../shared-charts/two-decimal.pipe';
import { PerfCalendarYearComponent } from './perf-calendar-year/perf-calendar-year.component';
import { PerfToObjectivesComponent } from './perf-to-objectives/perf-to-objectives.component';
import { AbsObjectiveGraphComponent } from './perf-to-objectives/abs-objective-graph/abs-objective-graph.component';
import { RelObjectiveGraphComponent } from './perf-to-objectives/rel-objective-graph/rel-objective-graph.component';
import { RelToTotfundunivComponent } from './perf-to-objectives/rel-to-totfunduniv/rel-to-totfunduniv.component';
import { FiveYrsEndingComponent } from './perf-to-objectives/five-yrs-ending/five-yrs-ending.component';
import { EcoOrientationGraphComponent } from './sector-attribution/eco-orientation-graph/eco-orientation-graph.component';
import { AggDefGraphComponent } from './sector-weighting/agg-def-graph/agg-def-graph.component';
import { GrowthValueGraphComponent } from './sector-weighting/growth-value-graph/growth-value-graph.component';
import { ReturnsBasedAnalysisComponent } from './returns-based-analysis/returns-based-analysis.component';
import { DomEquityGraphComponent } from './returns-based-analysis/dom-equity-graph/dom-equity-graph.component';
import { IntlEquityGraphComponent } from './returns-based-analysis/intl-equity-graph/intl-equity-graph.component';
import { DomEquityMgrComparisonsComponent } from './dom-equity-mgr-comparisons/dom-equity-mgr-comparisons.component';
import { ThreeYrAnnualizedComponent } from './dom-equity-mgr-comparisons/three-yr-annualized/three-yr-annualized.component';
import { FiveYrAnnualizedComponent } from './dom-equity-mgr-comparisons/five-yr-annualized/five-yr-annualized.component';
import { IntlEquityMgrComparisonsComponent } from './intl-equity-mgr-comparisons/intl-equity-mgr-comparisons.component';
import { IntlThreeYearGraphComponent } from './intl-equity-mgr-comparisons/intl-three-year-graph/intl-three-year-graph.component';
import { IntlFiveYearGraphComponent } from './intl-equity-mgr-comparisons/intl-five-year-graph/intl-five-year-graph.component';
import { DomFixedIncomeCompComponent } from './dom-fixed-income-comp/dom-fixed-income-comp.component';
import { DomThreeYrGraphComponent } from './dom-fixed-income-comp/dom-three-yr-graph/dom-three-yr-graph.component';
import { DomFiveYrGraphComponent } from './dom-fixed-income-comp/dom-five-yr-graph/dom-five-yr-graph.component';
import { DodgeCoxEquityComponent } from './dodge-cox-equity/dodge-cox-equity.component';
import { DCLongTermPerfComponent } from './dodge-cox-equity/d-c-long-term-perf/d-c-long-term-perf.component';
import { DCMgrRiskAnalysisComponent } from './dodge-cox-equity/d-c-mgr-risk-analysis/d-c-mgr-risk-analysis.component';
import { FiveYrCaptRatioComponent } from './dodge-cox-equity/d-c-mgr-risk-analysis/five-yr-capt-ratio/five-yr-capt-ratio.component';
import { DCAnnualPerfComponent } from './dodge-cox-equity/d-c-annual-perf/d-c-annual-perf.component';
import { LittleChartComponent } from './dodge-cox-equity/d-c-mgr-risk-analysis/little-chart/little-chart.component';
import { FiveYrRiskReturnComponent } from './dodge-cox-equity/d-c-mgr-risk-analysis/five-yr-risk-return/five-yr-risk-return.component';
import { SitLongTermPerfComponent } from './sit-inv-assc/sit-long-term-perf/sit-long-term-perf.component';
import { SitMgrRiskAnalysisComponent } from './sit-inv-assc/sit-mgr-risk-analysis/sit-mgr-risk-analysis.component';
import { SitAnnualPerfComponent } from './sit-inv-assc/sit-annual-perf/sit-annual-perf.component';
import { SitFiveYrRiskReturnComponent } from './sit-inv-assc/sit-mgr-risk-analysis/sit-five-yr-risk-return/sit-five-yr-risk-return.component';
import { SitFiveYrRatioComponent } from './sit-inv-assc/sit-mgr-risk-analysis/sit-five-yr-ratio/sit-five-yr-ratio.component';
import { FMLongTermPerfComponent } from './fiduciary-mgmt/f-m-long-term-perf/f-m-long-term-perf.component';
import { FMMgrRiskComponent } from './fiduciary-mgmt/f-m-mgr-risk/f-m-mgr-risk.component';
import { FMAnnualPerfComponent } from './fiduciary-mgmt/f-m-annual-perf/f-m-annual-perf.component';
import { FMThreeYrRatioComponent } from './fiduciary-mgmt/f-m-mgr-risk/f-m-three-yr-ratio/f-m-three-yr-ratio.component';
import { FMThreeYrRiskReturnComponent } from './fiduciary-mgmt/f-m-mgr-risk/f-m-three-yr-risk-return/f-m-three-yr-risk-return.component';
import { MsAnnualPerfComponent } from './morgan-stanley-intl-equity/ms-annual-perf/ms-annual-perf.component';
import { MsLongTermPerfComponent } from './morgan-stanley-intl-equity/ms-long-term-perf/ms-long-term-perf.component';
import { MsMgrRiskAnalysisComponent } from './morgan-stanley-intl-equity/ms-mgr-risk-analysis/ms-mgr-risk-analysis.component';
import { MsIntlFiveYrRatioComponent } from './morgan-stanley-intl-equity/ms-mgr-risk-analysis/ms-intl-five-yr-ratio/ms-intl-five-yr-ratio.component';
import { MsIntlFiveYrRiskReturnComponent } from './morgan-stanley-intl-equity/ms-mgr-risk-analysis/ms-intl-five-yr-risk-return/ms-intl-five-yr-risk-return.component';
import { LamLongTermPerfComponent } from './lazard-asset-mgmt/lam-long-term-perf/lam-long-term-perf.component';
import { LamAnnualPerfComponent } from './lazard-asset-mgmt/lam-annual-perf/lam-annual-perf.component';
import { MsEmergingLongTermPerfComponent } from './morgan-stanley-emerging-mkts/ms-emerging-long-term-perf/ms-emerging-long-term-perf.component';
import { MsEmergingMgrRiskComponent } from './morgan-stanley-emerging-mkts/ms-emerging-mgr-risk/ms-emerging-mgr-risk.component';
import { MsEmergingAnnualPerfComponent } from './morgan-stanley-emerging-mkts/ms-emerging-annual-perf/ms-emerging-annual-perf.component';
import { MsEmergingRiskReturnComponent } from './morgan-stanley-emerging-mkts/ms-emerging-mgr-risk/ms-emerging-risk-return/ms-emerging-risk-return.component';
import { MsEmergingCaptureRatioComponent } from './morgan-stanley-emerging-mkts/ms-emerging-mgr-risk/ms-emerging-capture-ratio/ms-emerging-capture-ratio.component';
import { LsLongTermPerfComponent } from './loomis-sayles/ls-long-term-perf/ls-long-term-perf.component';
import { LsMgrRiskAnalysisComponent } from './loomis-sayles/ls-mgr-risk-analysis/ls-mgr-risk-analysis.component';
import { LsAnnualPerfComponent } from './loomis-sayles/ls-annual-perf/ls-annual-perf.component';
import { LsRiskReturnComponent } from './loomis-sayles/ls-mgr-risk-analysis/ls-risk-return/ls-risk-return.component';
import { LsCaptureRatioComponent } from './loomis-sayles/ls-mgr-risk-analysis/ls-capture-ratio/ls-capture-ratio.component';
import { RreefLongTermPerfComponent } from './RREEF-II-III/rreef-long-term-perf/rreef-long-term-perf.component';
import { RreefMgrRiskAnalysisComponent } from './RREEF-II-III/rreef-mgr-risk-analysis/rreef-mgr-risk-analysis.component';
import { RreefAnnualPerfComponent } from './RREEF-II-III/rreef-annual-perf/rreef-annual-perf.component';
import { RreefRiskReturnComponent } from './RREEF-II-III/rreef-mgr-risk-analysis/rreef-risk-return/rreef-risk-return.component';
import { RreefCaptureRatioComponent } from './RREEF-II-III/rreef-mgr-risk-analysis/rreef-capture-ratio/rreef-capture-ratio.component';
import { TcLongTermPerfComponent } from './tortoise-cap/tc-long-term-perf/tc-long-term-perf.component';
import { TcAnnualPerfComponent } from './tortoise-cap/tc-annual-perf/tc-annual-perf.component';
import { NrAnnualPerfComponent } from './natural-resources/nr-annual-perf/nr-annual-perf.component';
import { NrMgrRiskAnalysisComponent } from './natural-resources/nr-mgr-risk-analysis/nr-mgr-risk-analysis.component';
import { NrLongTermPerfComponent } from './natural-resources/nr-long-term-perf/nr-long-term-perf.component';
import { NrCaptureRatioComponent } from './natural-resources/nr-mgr-risk-analysis/nr-capture-ratio/nr-capture-ratio.component';
import { NrRiskReturnComponent } from './natural-resources/nr-mgr-risk-analysis/nr-risk-return/nr-risk-return.component';
import { UbsLongTermPerfComponent } from './UBS-neutral-alpha/ubs-long-term-perf/ubs-long-term-perf.component';
import { UbsAnnualPerfComponent } from './UBS-neutral-alpha/ubs-annual-perf/ubs-annual-perf.component';
import { AcLongTermPerfComponent } from './abbot-capital/ac-long-term-perf/ac-long-term-perf.component';
import { AcMgrRiskAnalysisComponent } from './abbot-capital/ac-mgr-risk-analysis/ac-mgr-risk-analysis.component';
import { AcAnnualPerfComponent } from './abbot-capital/ac-annual-perf/ac-annual-perf.component';
import { AcRiskReturnComponent } from './abbot-capital/ac-mgr-risk-analysis/ac-risk-return/ac-risk-return.component';
import { AcCaptureRatioComponent } from './abbot-capital/ac-mgr-risk-analysis/ac-capture-ratio/ac-capture-ratio.component';
import { CipLongTermPerfComponent } from './commonfund-intl-pe/cip-long-term-perf/cip-long-term-perf.component';
import { CipMgrRiskAnalysisComponent } from './commonfund-intl-pe/cip-mgr-risk-analysis/cip-mgr-risk-analysis.component';
import { CipAnnualPerfComponent } from './commonfund-intl-pe/cip-annual-perf/cip-annual-perf.component';
import { CipRiskReturnComponent } from './commonfund-intl-pe/cip-mgr-risk-analysis/cip-risk-return/cip-risk-return.component';
import { CipCaptureRatioComponent } from './commonfund-intl-pe/cip-mgr-risk-analysis/cip-capture-ratio/cip-capture-ratio.component';
import { CvLongTermPerfComponent } from './commonfund-vp/cv-long-term-perf/cv-long-term-perf.component';
import { CvAnnualPerfComponent } from './commonfund-vp/cv-annual-perf/cv-annual-perf.component';
import { CvMgrRiskAnalysisComponent } from './commonfund-vp/cv-mgr-risk-analysis/cv-mgr-risk-analysis.component';
import { CvRiskReturnComponent } from './commonfund-vp/cv-mgr-risk-analysis/cv-risk-return/cv-risk-return.component';
import { CvCaptureRatioComponent } from './commonfund-vp/cv-mgr-risk-analysis/cv-capture-ratio/cv-capture-ratio.component';
import { CpLongTermPerfComponent } from './commonfund-pe/cp-long-term-perf/cp-long-term-perf.component';
import { CpMgrRiskAnalysisComponent } from './commonfund-pe/cp-mgr-risk-analysis/cp-mgr-risk-analysis.component';
import { CpAnnualPerfComponent } from './commonfund-pe/cp-annual-perf/cp-annual-perf.component';
import { CpRiskReturnComponent } from './commonfund-pe/cp-mgr-risk-analysis/cp-risk-return/cp-risk-return.component';
import { CpCaptureRatioComponent } from './commonfund-pe/cp-mgr-risk-analysis/cp-capture-ratio/cp-capture-ratio.component';
import { CcpLongTermPerfComponent } from './commonfund-cap-partners/ccp-long-term-perf/ccp-long-term-perf.component';
import { CcpMgrRiskAnalysisComponent } from './commonfund-cap-partners/ccp-mgr-risk-analysis/ccp-mgr-risk-analysis.component';
import { CcpAnnualPerfComponent } from './commonfund-cap-partners/ccp-annual-perf/ccp-annual-perf.component';
import { CcpCaptureRatioComponent } from './commonfund-cap-partners/ccp-mgr-risk-analysis/ccp-capture-ratio/ccp-capture-ratio.component';
import { CcpRiskReturnComponent } from './commonfund-cap-partners/ccp-mgr-risk-analysis/ccp-risk-return/ccp-risk-return.component';
import { TotalFundAssetAllocChartsComponent } from './total-fund-asset-alloc-charts/total-fund-asset-alloc-charts.component';
import { TotalfundcurrentchartComponent } from './total-fund-asset-alloc-charts/totalfundcurrentchart/totalfundcurrentchart.component';
import { TotalfundtargetComponent } from './total-fund-asset-alloc-charts/totalfundtarget/totalfundtarget.component';
import { NgxPrintModule } from 'ngx-print';
import { AllComponent } from './all/all.component';



@NgModule({
    imports: [
        CommonModule,
        TableofContentsRoutingModule,
        HighchartsChartModule,
        NgxPrintModule
    ],
    providers: [

    ],

    declarations: [TableOfContentsComponent,
        ConsultingteamComponent,
        TotalfundComponent,
        TotalfundcurrentchartComponent,
        TotalfundtargetComponent,
        ManagerReviewComponent,
        ConvertToSpacesPipe,
        ConvertToDashPipe,
        TrimLeadZeroPipe,
        TotalperfbenchmarkComponent,
        FiveYearReturnGraphComponent,
        TotalfundAttributionComponent,
        CumulativeReturnGraphComponent,
        TotalValueGainedlostGraphComponent,
        FiveLargestHoldingsReturnsGraphComponent,
        AveragePortfolioChartComponent,
        FiveHighestPriceChangeGraphComponent,
        FiveLowestPriceChangeGraphComponent,
        SectorAttributionComponent,
        SectorWeightingComponent,
        SectorGrowthValueComponent,
        MgrPerfVsPeersComponent,
        GlossaryComponent,
        PerfResultsComponent,
        RiskAnalysisComponent,
        TrimLeadZeroNegPipe,
        TwoDecimalPipe,
        PerfCalendarYearComponent,
        PerfToObjectivesComponent,
        AbsObjectiveGraphComponent,
        RelObjectiveGraphComponent,
        RelToTotfundunivComponent,
        FiveYrsEndingComponent,
        EcoOrientationGraphComponent,
        AggDefGraphComponent,
        GrowthValueGraphComponent,
        ReturnsBasedAnalysisComponent,
        DomEquityGraphComponent,
        IntlEquityGraphComponent,
        DomEquityMgrComparisonsComponent,
        ThreeYrAnnualizedComponent,
        FiveYrAnnualizedComponent,
        IntlEquityMgrComparisonsComponent,
        IntlThreeYearGraphComponent,
        IntlFiveYearGraphComponent,
        DomFixedIncomeCompComponent,
        DomThreeYrGraphComponent,
        DomFiveYrGraphComponent,
        DodgeCoxEquityComponent,
        DCLongTermPerfComponent,
        FiveYrRiskReturnComponent,
        FiveYrCaptRatioComponent,
        DCAnnualPerfComponent,
        LittleChartComponent,
        DCMgrRiskAnalysisComponent,
        SitLongTermPerfComponent,
        SitMgrRiskAnalysisComponent,
        SitAnnualPerfComponent,
        SitFiveYrRiskReturnComponent,
        SitFiveYrRatioComponent,
        FMLongTermPerfComponent,
        FMMgrRiskComponent,
        FMAnnualPerfComponent,
        FMThreeYrRatioComponent,
        FMThreeYrRiskReturnComponent,
        MsAnnualPerfComponent,
        MsLongTermPerfComponent,
        MsMgrRiskAnalysisComponent,
        MsIntlFiveYrRatioComponent,
        MsIntlFiveYrRiskReturnComponent,
        LamLongTermPerfComponent,
        LamAnnualPerfComponent,
        MsEmergingLongTermPerfComponent,
        MsEmergingMgrRiskComponent,
        MsEmergingAnnualPerfComponent,
        MsEmergingRiskReturnComponent,
        MsEmergingCaptureRatioComponent,
        LsLongTermPerfComponent,
        LsMgrRiskAnalysisComponent,
        LsAnnualPerfComponent,
        LsRiskReturnComponent,
        LsCaptureRatioComponent,
        RreefLongTermPerfComponent,
        RreefMgrRiskAnalysisComponent,
        RreefAnnualPerfComponent,
        RreefRiskReturnComponent,
        RreefCaptureRatioComponent,
        TcLongTermPerfComponent,
        TcAnnualPerfComponent,
        NrAnnualPerfComponent,
        NrMgrRiskAnalysisComponent,
        NrLongTermPerfComponent,
        NrCaptureRatioComponent,
        NrRiskReturnComponent,
        UbsLongTermPerfComponent,
        UbsAnnualPerfComponent,
        AcLongTermPerfComponent,
        AcMgrRiskAnalysisComponent,
        AcAnnualPerfComponent,
        AcRiskReturnComponent,
        AcCaptureRatioComponent,
        CipLongTermPerfComponent,
        CipMgrRiskAnalysisComponent,
        CipAnnualPerfComponent,
        CipRiskReturnComponent,
        CipCaptureRatioComponent,
        CvLongTermPerfComponent,
        CvAnnualPerfComponent,
        CvMgrRiskAnalysisComponent,
        CvRiskReturnComponent,
        CvCaptureRatioComponent,
        CpLongTermPerfComponent,
        CpMgrRiskAnalysisComponent,
        CpAnnualPerfComponent,
        CpRiskReturnComponent,
        CpCaptureRatioComponent,
        CcpLongTermPerfComponent,
        CcpMgrRiskAnalysisComponent,
        CcpAnnualPerfComponent,
        CcpCaptureRatioComponent,
        CcpRiskReturnComponent,
        TotalFundAssetAllocChartsComponent,
        AllComponent
    ]
})
export class TableOfContentsModule { }
