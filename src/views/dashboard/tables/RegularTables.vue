<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-v-component heading="Top Records All Users" />
    <base-material-card class="px-5 py-3">
      <template
        v-slot:heading
        background-color="indigo"
      >
        <v-tabs
          v-model="tabs1"
          background-color="transparent"
          slider-color="white"
        >
          <v-tab class="mr-1">
            All Registered Users
          </v-tab>
          <v-tab class="mr-1">
            Yesterday
          </v-tab>
          <v-tab class="mr-1">
            Last Seven Days
          </v-tab>
          <v-tab class="mr-1">
            Last Thirty Days
          </v-tab>
          <v-tab class="mr-1">
            Last Ninty Days
          </v-tab>
        </v-tabs>
      </template>

      <v-tabs-items
        v-model="tabs1"
        class="transparent"
      >
        <v-tab-item
          v-for="(n , index) in 5"
          :key="n"
          :index="index"
        >
          <v-row no-gutters>
            <v-col
              cols="12"
              lg="7"
            >
              <v-data-table
                v-if="index===0"
                :headers="headers"
                :items="topCountriesAll"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>

              <v-data-table
                v-if="index===1"
                :headers="headers"
                :items="topCountriesYesterday"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
              <v-data-table
                v-if="index===2"
                :headers="headers"
                :items="topCountriesSevenDays"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
              <v-data-table
                v-if="index===3"
                :headers="headers"
                :items="topCountriesThirtyDays"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
              <v-data-table
                v-if="index===4"
                :headers="headers"
                :items="topCountriesNinetyDays"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
            </v-col>

            <v-col
              cols="12"
              lg="5"
            >
              <base-material-chart-card
                v-if="index===0"
                :data="pieChartAllDays.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent chart"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
              <base-material-chart-card
                v-if="index===1"
                :data="pieDailyChart.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
              <base-material-chart-card
                v-if="index===2"
                :data="pieChartSevenDays.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
              <base-material-chart-card
                v-if="index===3"
                :data="pieChartThirtyDays.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
              <base-material-chart-card
                v-if="index===4"
                :data="pieChartNintyDays.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </base-material-card>

    <base-v-component heading="Top Records iOS Users" />
    <base-material-card class="px-5 py-3">
      <template
        v-slot:heading
        background-color="indigo"
      >
        <v-tabs
          v-model="tabs2"
          background-color="transparent"
          slider-color="white"
        >
          <v-tab class="mr-1">
            All Registered Users
          </v-tab>
          <v-tab class="mr-1">
            Yesterday
          </v-tab>
          <v-tab class="mr-1">
            Last Seven Days
          </v-tab>
          <v-tab class="mr-1">
            Last Thirty Days
          </v-tab>
          <v-tab class="mr-1">
            Last Ninty Days
          </v-tab>
        </v-tabs>
      </template>

      <v-tabs-items
        v-model="tabs2"
        class="transparent"
      >
        <v-tab-item
          v-for="(n, index) in 5"
          :key="n"
          :index="index"
        >
          <v-row no-gutters>
            <v-col
              cols="12"
              lg="7"
            >
              <v-data-table
                v-if="index===0"
                :headers="headersiOS"
                :items="topCountriesAlliOS"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
              <v-data-table
                v-if="index===1"
                :headers="headersiOS"
                :items="topCountriesYesterdayiOS"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
              <v-data-table
                v-if="index===2"
                :headers="headersiOS"
                :items="topCountriesSevenDaysiOS"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
              <v-data-table
                v-if="index===3"
                :headers="headersiOS"
                :items="topCountriesThirtyDaysiOS"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
              <v-data-table
                v-if="index===4"
                :headers="headersiOS"
                :items="topCountriesNinetyDaysiOS"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
            </v-col>
            <v-col
              cols="12"
              lg="5"
            >
              <base-material-chart-card
                v-if="index===0"
                :data="pieChartAllDaysiOS.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
              <base-material-chart-card
                v-if="index===1"
                :data="pieChartYesDaysiOS.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
              <base-material-chart-card
                v-if="index===2"
                :data="pieChartSevenDaysiOS.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
              <base-material-chart-card
                v-if="index===3"
                :data="pieChartThirtyDaysiOS.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
              <base-material-chart-card
                v-if="index===4"
                :data="pieChartNintyDaysiOS.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item />
      </v-tabs-items>
    </base-material-card>
    <base-v-component heading="Top Records Android Users" />
    <base-material-card class="px-5 py-3">
      <template
        v-slot:heading
        background-color="indigo"
      >
        <v-tabs
          v-model="tabs3"
          background-color="transparent"
          slider-color="white"
        >
          <v-tab class="mr-1">
            All Registered Users
          </v-tab>
          <v-tab class="mr-1">
            Yesterday
          </v-tab>
          <v-tab class="mr-1">
            Last Seven Days
          </v-tab>
          <v-tab class="mr-1">
            Last Thirty Days
          </v-tab>
          <v-tab class="mr-1">
            Last Ninty Days
          </v-tab>
        </v-tabs>
      </template>

      <v-tabs-items
        v-model="tabs3"
        class="transparent"
      >
        <v-tab-item
          v-for="(n, index) in 5"
          :key="n"
          :index="index"
        >
          <v-row no-gutters>
            <v-col
              cols="12"
              lg="7"
            >
              <v-data-table
                v-if="index===0"
                :headers="headersAndroid"
                :items="topCountriesAllAndroid"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
              <v-data-table
                v-if="index===1"
                :headers="headersAndroid"
                :items="topCountriesYesterdayAndroid"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
              <v-data-table
                v-if="index===2"
                :headers="headersAndroid"
                :items="topCountriesSevenDaysAndroid"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
              <v-data-table
                v-if="index===3"
                :headers="headersAndroid"
                :items="topCountriesThirtyDaysAndroid"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
              <v-data-table
                v-if="index===4"
                :headers="headersAndroid"
                :items="topCountriesNinetyDaysAndroid"
                :items-per-page="5"
                class="elevation-0"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
            </v-col>
            <v-col
              cols="12"
              lg="5"
            >
              <base-material-chart-card
                v-if="index===0"
                :data="pieChartAllAndroid.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
              <base-material-chart-card
                v-if="index===1"
                :data="pieChartYesDaysAndroid.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
              <base-material-chart-card
                v-if="index===2"
                :data="pieChartSevenDaysAndroid.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
              <base-material-chart-card
                v-if="index===3"
                :data="pieChartThirtyDaysAndroid.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
              <base-material-chart-card
                v-if="index===4"
                :data="pieChartNintyDaysAndroid.data"
                :options="pieDailyChart.options"
                :responsive-options="pieDailyChart.responsiveOptions"
                color="white"
                hover-reveal
                type="Pie"
                class="elevation-0 elevParent"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        v-bind="attrs"
                        color="info"
                        icon
                        v-on="on"
                      >
                        <v-icon color="info">
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <!-- <span>Refresh</span> -->
                  </v-tooltip>
                </template>
              </base-material-chart-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </base-material-card>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import Chartist from 'chartist'
  import * as ChartistTooltips from 'chartist-plugin-tooltips-updated'

  export default {
    data () {
      return {
        pieChartAllDays: {
          data: {
            labels: [],
            series: [],
          },
        },
        pieChartAllDaysiOS: {
          data: {
            series: [],
            labels: [],
          },
        },
        pieChartAllAndroid: {
          data: {
            series: [],
            labels: [],
          },
        },

        pieChartSevenDays: {
          data: {
            series: [],
            labels: [],
          },
        },
        pieChartThirtyDays: {
          data: {
            series: [],
            labels: [],
          },
        },
        pieChartNintyDays: {
          data: {
            series: [],
            labels: [],
          },
        },
        pieChartYesDaysiOS: {
          data: {
            series: [],
            labels: [],
          },
        },
        pieChartSevenDaysiOS: {
          data: {
            series: [],
            labels: [],
          },
        },
        pieChartThirtyDaysiOS: {
          data: {
            series: [],
            labels: [],
          },
        },
        pieChartNintyDaysiOS: {
          data: {
            series: [],
            labels: [],
          },
        },
        pieChartYesDaysAndroid: {
          data: {
            series: [],
            labels: [],
          },
        },
        pieChartSevenDaysAndroid: {
          data: {
            series: [],
            labels: [],
          },
        },
        pieChartThirtyDaysAndroid: {
          data: {
            series: [],
            labels: [],
          },
        },
        pieChartNintyDaysAndroid: {
          data: {
            series: [],
            labels: [],
          },
        },
        pieDailyChart: {
          data: {
            series: [],
            labels: [],
          },
          options: {
            plugins: [Chartist.plugins.tooltip({
              transformTooltipTextFnc: function (tooltip) {
                return tooltip + '%'
              },
              labelInterpolationFnc: function (value, idx) {
                return value
              },
            })],
            donut: true,
            donutWidth: 60,
            donutSolid: true,
            startAngle: 270,
            showLabel: true,
            width: '110%',
            height: '300px',
            pieHole: 2,
          },
          responsiveOptions: [
            [
              'screen and (min-width: 600px)',
              {
                labelOffset: 25,
                chartPadding: 0,
                labelDirection: 'explode',
                labelInterpolationFnc: function (value, idx) {
                  return value
                },
              },
            ],
            [
              'screen and (min-width: 1024px)',
              {
                labelOffset: 25,
                chartPadding: 0,
                labelDirection: 'explode',
                labelInterpolationFnc: function (value, idx) {
                  return value
                },
              },
            ],
          ],
        },
        headers: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'CountryCode',
          },
          { text: 'Countries', value: 'CountryName' },
          { text: 'Total Users', value: 'totalCount' },
          { text: 'Percentage (%)', value: 'Percentage' },
        ],

        headersiOS: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'CountryCode',
          },
          { text: 'Countries', value: 'CountryName' },
          { text: 'Total Users', value: 'totaliOSCount' },
          { text: 'Percentage (%)', value: 'Percentage' },
        ],
        headersAndroid: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'CountryCode',
          },
          { text: 'Countries', value: 'CountryName' },
          { text: 'Total Users', value: 'totalAndroidCount' },
          { text: 'Percentage (%)', value: 'Percentage' },
        ],
        topCountriesNinetyDays: [],
        topCountriesSevenDays: [],
        topCountriesYesterday: [],
        topCountriesThirtyDays: [],
        topCountriesAll: [],
        topCountriesNinetyDaysiOS: [],
        topCountriesSevenDaysiOS: [],
        topCountriesYesterdayiOS: [],
        topCountriesThirtyDaysiOS: [],
        topCountriesAlliOS: [],
        topCountriesNinetyDaysAndroid: [],
        topCountriesSevenDaysAndroid: [],
        topCountriesYesterdayAndroid: [],
        topCountriesThirtyDaysAndroid: [],
        topCountriesAllAndroid: [],
        tabs1: 0,
        tabs2: 0,
        tabs3: 0,
      }
    },
    mounted () {
      const user = localStorage.getItem('user')
      if (!user) {
        this.$router.push('/login')
      }
      ChartistTooltips()
      // console.log(user)
      // console.log('Component Mounted')
      var key = user
      const urlTopCountries =
        'https://webapps.klikpal.com:9002/dashboard-api/statistics/countrystatistics?countryStatistics=0'

      const configTopCountries = {
        method: 'post',
        url: urlTopCountries,
        headers: {
          Authorization: key,
        },
      }
      axios(configTopCountries).then(response => {
        const resp = response.data.data
        this.allCountries = resp.allRegisteredUser
        this.topCountriesAll = this.allCountries.slice(0, 10)
        const pieData = this.pieChartAllDays.data
        this.topCountriesAll.map(value => {
          pieData.labels.push(value.CountryName)
          pieData.series.push(value.Percentage)
        })
      })
      const urlTopCountriesIOs =
        'https://webapps.klikpal.com:9002/dashboard-api/statistics/countrystatistics?countryStatistics=1'

      const configTopCountriesIOs = {
        method: 'post',
        url: urlTopCountriesIOs,
        headers: {
          Authorization: key,
        },
      }
      axios(configTopCountriesIOs).then(response => {
        const resp = response.data.data
        // console.log(resp)
        this.allCountiesiOS = resp.allRegisteredUser
        this.topCountriesAlliOS = this.allCountiesiOS.slice(0, 10)
        this.topCountriesAlliOS.map(value => {
          this.pieChartAllDaysiOS.data.labels.push(value.CountryName)
          this.pieChartAllDaysiOS.data.series.push(value.Percentage)
        })
      })
      const urlTopCountriesAnd =
        'https://webapps.klikpal.com:9002/dashboard-api/statistics/countrystatistics?countryStatistics=2'

      const configTopCountriesAnd = {
        method: 'post',
        url: urlTopCountriesAnd,
        headers: {
          Authorization: key,
        },
      }
      axios(configTopCountriesAnd).then(response => {
        const resp = response.data.data
        this.allCountiesAndriod = resp.allRegisteredUser
        // console.log(this.allCountiesAndriod)
        this.topCountriesAllAndroid = this.allCountiesAndriod.slice(0, 10)
        // console.log(this.topCountriesAllAndroid)
        this.topCountriesAllAndroid.map(value => {
          this.pieChartAllAndroid.data.labels.push(value.CountryName)
          this.pieChartAllAndroid.data.series.push(value.Percentage)
        })
      // console.log(this.topCountriesAllAndroid)
      })
      const urlTopCountNinDays =
        'https://webapps.klikpal.com:9002/dashboard-api/statistics/countrystatisticswisemouthly'

      const configTopCountNinDays = {
        method: 'post',
        url: urlTopCountNinDays,
        headers: {
          Authorization: key,
        },
      }
      axios(configTopCountNinDays).then(response => {
        const resp = response.data.data
        // console.log(resp)
        this.topCountriesNinetyDays = resp.ninetydaysAgoDateCountry
        this.topCountriesNinetyDays.map(value => {
          this.pieChartNintyDays.data.labels.push(value.CountryName)
          this.pieChartNintyDays.data.series.push(value.Percentage)
        })
        this.topCountriesSevenDays = resp.sevendaysAgoCountry
        this.topCountriesSevenDays.map(value => {
          this.pieChartSevenDays.data.labels.push(value.CountryName)
          this.pieChartSevenDays.data.series.push(value.Percentage)
        })
        this.topCountriesYesterday = resp.yesterdayCountry
        this.topCountriesYesterday.map(value => {
          this.pieDailyChart.data.labels.push(value.CountryName)
          this.pieDailyChart.data.series.push(value.Percentage)
        })
        this.topCountriesThirtyDays = resp.thirtydaysAgoDateCountry
        this.topCountriesThirtyDays.map(value => {
          this.pieChartThirtyDays.data.labels.push(value.CountryName)
          this.pieChartThirtyDays.data.series.push(value.Percentage)
        })
      })
      const urlTopCountNinDIOs =
        'https://webapps.klikpal.com:9002/dashboard-api/statistics/countrystatisticswisemouthly?countryStatistics=1'

      const configTopCountNinDIOs = {
        method: 'post',
        url: urlTopCountNinDIOs,
        headers: {
          Authorization: key,
        },
      }
      axios(configTopCountNinDIOs).then(response => {
        const resp = response.data.data
        this.topCountriesNinetyDaysiOS = resp.ninetydaysAgoDateCountry
        this.topCountriesNinetyDaysiOS.map(value => {
          this.pieChartNintyDaysiOS.data.labels.push(value.CountryName)
          this.pieChartNintyDaysiOS.data.series.push(value.Percentage)
        })
        // console.log(this.topCountriesNinetyDaysiOS, 'IOS res')
        this.topCountriesSevenDaysiOS = resp.sevendaysAgoCountry
        this.topCountriesSevenDaysiOS.map(value => {
          this.pieChartSevenDaysiOS.data.labels.push(value.CountryName)
          this.pieChartSevenDaysiOS.data.series.push(value.Percentage)
        })
        this.topCountriesYesterdayiOS = resp.yesterdayCountry
        this.topCountriesYesterdayiOS.map(value => {
          this.pieChartYesDaysiOS.data.labels.push(value.CountryName)
          this.pieChartYesDaysiOS.data.series.push(value.Percentage)
        })
        this.topCountriesThirtyDaysiOS = resp.thirtydaysAgoDateCountry
        this.topCountriesThirtyDaysiOS.map(value => {
          this.pieChartThirtyDaysiOS.data.labels.push(value.CountryName)
          this.pieChartThirtyDaysiOS.data.series.push(value.Percentage)
        })
      })
      const urlTopCountNinAnd =
        'https://webapps.klikpal.com:9002/dashboard-api/statistics/countrystatisticswisemouthly?countryStatistics=2'

      const configTopCountNinAnd = {
        method: 'post',
        url: urlTopCountNinAnd,
        headers: {
          Authorization: key,
        },
      }
      axios(configTopCountNinAnd).then(response => {
        const resp = response.data.data
        // console.log(resp, 'Android Response')
        this.topCountriesNinetyDaysAndroid = resp.ninetydaysAgoDateCountry
        this.topCountriesNinetyDaysAndroid.map(value => {
          this.pieChartNintyDaysAndroid.data.labels.push(value.CountryName)
          this.pieChartNintyDaysAndroid.data.series.push(value.Percentage)
        })
        this.topCountriesSevenDaysAndroid = resp.sevendaysAgoCountry
        this.topCountriesSevenDaysAndroid.map(value => {
          this.pieChartSevenDaysAndroid.data.labels.push(value.CountryName)
          this.pieChartSevenDaysAndroid.data.series.push(value.Percentage)
        })
        this.topCountriesYesterdayAndroid = resp.yesterdayCountry
        this.topCountriesYesterdayAndroid.map(value => {
          this.pieChartYesDaysAndroid.data.labels.push(value.CountryName)
          this.pieChartYesDaysAndroid.data.series.push(value.Percentage)
        })
        this.topCountriesThirtyDaysAndroid = resp.thirtydaysAgoDateCountry
        this.topCountriesThirtyDaysAndroid.map(value => {
          this.pieChartThirtyDaysAndroid.data.labels.push(value.CountryName)
          this.pieChartThirtyDaysAndroid.data.series.push(value.Percentage)
        })
      })
    },
  }
</script>

<style>
.chartist-tooltip {
    position: absolute;
    display: inline-block;
    opacity: 0;
    min-width: 5em;
    padding: .5em;
    background: #009b77;
    color: white;
    font-family: Oxygen,Helvetica,Arial,sans-serif;
    font-weight: 700;
    text-align: center;
    pointer-events: none;
    z-index: 1;
    -webkit-transition: opacity .2s linear;
    -moz-transition: opacity .2s linear;
    -o-transition: opacity .2s linear;
    transition: opacity .2s linear; }
  .chartist-tooltip:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -15px;
    border: 15px solid transparent;
    border-top-color: #009b77; }
  .chartist-tooltip.tooltip-show {
    opacity: 1; }

  .ct-area, .ct-line {
    pointer-events: none; }
    .ct-label {
      font-weight: 600 !important;
      font-size: 10px !important;
      fill: black !important;
       font-family:Verdana !important;
    }
@media screen and (max-width: 700px) {
  .v-application .py-3 {
    padding-bottom: 68px !important;
  }
   .ct-label {
      font-weight: 400 !important;
      font-size: 8px !important;
      fill: black !important;
       font-family:Verdana !important;
    }
}
.v-card--material-chart .v-card--material__heading {
  max-height: 302px !important;
  /* height: 302px !important; */
}
.v-card--material-chart .v-card--material__heading .ct-label {
  font-weight: 300;
  color: white;
}
.ct-label {
  fill: white;
}
.elevParent /deep/ .elevation-6 {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
}
.ct-square>svg {
  top: -9px !important;
}
.ct-series-a .ct-area, .ct-series-a .ct-slice-donut-solid, .ct-series-a .ct-slice-pie {
    fill: #2f6a31
}
.ct-series-b .ct-area, .ct-series-b .ct-slice-donut-solid, .ct-series-b .ct-slice-pie {
    fill: #3e8e41
}
.ct-series-c .ct-area, .ct-series-c .ct-slice-donut-solid, .ct-series-c .ct-slice-pie {
  fill: #4caf50
}
.ct-series-d .ct-area, .ct-series-d .ct-slice-donut-solid, .ct-series-d .ct-slice-pie {
  fill: #4eb151
}
.ct-series-e .ct-area, .ct-series-e .ct-slice-donut-solid, .ct-series-e .ct-slice-pie {
  fill: #5fb962
}
.ct-series-f .ct-area, .ct-series-f .ct-slice-donut-solid, .ct-series-f .ct-slice-pie {
fill: #71c174
}
.ct-series-g .ct-area, .ct-series-g .ct-slice-donut-solid, .ct-series-g .ct-slice-pie {
fill: #83c985
}
.ct-series-h .ct-area, .ct-series-h .ct-slice-donut-solid, .ct-series-h .ct-slice-pie {
fill: #95d097
}
.ct-series-i .ct-area, .ct-series-i .ct-slice-donut-solid, .ct-series-i .ct-slice-pie {
fill: #a6d8a8
}
.ct-series-j .ct-area, .ct-series-j .ct-slice-donut-solid, .ct-series-j .ct-slice-pie {
fill: #b8e0b9

}
.ct-chart {
    margin: auto;
    width: 300px;
    height: 300px;
}
</style>
