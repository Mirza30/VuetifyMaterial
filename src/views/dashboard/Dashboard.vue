<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="#E91E63"
          hover-reveal
          type="Line"
        >
          <template v-slot:reveal-actions>
            <!-- <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <i
                  dark
                  class="material-icons icon-black"
                  v-on="on"
                >
                  question_answer
                </i>
              </template>
              <span>Tooltip</span>
            </v-tooltip> -->

            <!-- <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <span>Right tooltip</span>
            </v-tooltip> -->
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Last Five Days Total Register Users
          </h4>

          <p
            v-if="change > 0"
            class="d-inline-flex font-weight-light ml-2 mt-1"
          >
            <v-icon
              color="green"
              small
            >
              mdi-arrow-{{ arrow }}
            </v-icon>
            <span class="green--text">{{ change }}%</span>&nbsp;
            {{ incdec }} in register users in last five days
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="success"
          hover-reveal
          type="Line"
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

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Last Five days iOS Register Users
          </h4>

          <p
            v-if="change > 0"
            class="d-inline-flex font-weight-light ml-2 mt-1"
          >
            <v-icon
              color="green"
              small
            >
              mdi-arrow-{{ arrow1 }}
            </v-icon>
            <span class="green--text">{{ changeiOS }}%</span>&nbsp;
            {{ incdec1 }} in registered ios users in last five days
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          hover-reveal
          color="info"
          type="Line"
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

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h3 class="card-title font-weight-light mt-2 ml-2">
            Last Five days android Register Users
          </h3>

          <p
            v-if="change > 0"
            class="d-inline-flex font-weight-light ml-2 mt-1"
          >
            <v-icon
              color="green"
              small
            >
              mdi-arrow-{{ arrow2 }}
            </v-icon>
            <span class="green--text">{{ changeAndroid }}%</span>&nbsp;
            {{ incdec2 }} in registered android users in last five days
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">campaign sent 26 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="info"
          icon="mdi-account-group"
          title="Total Users"
          :value=" registerUsers "
          sub-icon="mdi-calendar"
          sub-text="Register users Today"
          :sub-value=" todayUsers "
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="primary"
          icon="mdi-apple"
          title="iOS Users"
          :value=" iosUsers "
          sub-icon="mdi-calendar"
          sub-text="Register iOS Users Today"
          :sub-value=" todayiOSUsers "
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="success"
          icon="mdi-android"
          title="Andriod User"
          :value=" androidUsers"
          sub-icon="mdi-calendar"
          sub-text="Register Andriod Users Today"
          :sub-value=" todayAndriodUsers "
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="orange"
          icon="mdi-download"
          title="Total App Downloads"
          value="184"
          sub-icon="mdi-information-outline"
          sub-text="App Downloads Today"
          sub-value="52"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <base-material-card class="px-5 py-3">
          <template
            v-slot:heading
            background-color="indigo"
          >
            <v-tabs
              v-model="tabs"
              background-color="transparent"
              slider-color="white"
            >
              <v-tab class="mr-1">
                Registered Users
              </v-tab>
              <v-tab class="mr-1">
                iOS Users
              </v-tab>
              <v-tab class="mr-1">
                Android Users
              </v-tab>
            </v-tabs>
          </template>

          <v-tabs-items
            v-model="tabs"
            class="transparent"
          >
            <v-tab-item
              v-for="(n, index) in 3"
              :key="n"
              :index="index"
            >
              <v-data-table
                v-if="index===0"
                :headers="headers"
                :items="allCountries"
                :items-per-page="5"
                class="elevation-1"
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
                :items="allCountiesiOS"
                :items-per-page="5"
                class="elevation-1"
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
                :items="allCountiesAndriod"
                :items-per-page="5"
                class="elevation-1"
              >
                <template v-slot:item.CountryCode="{ item }">
                  <img
                    :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                    style="width: 25px; height: 25px"
                  >
                </template>
              </v-data-table>
            </v-tab-item>
          </v-tabs-items>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
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
                Last Five Days Users
              </v-tab>
            </v-tabs>
          </template>

          <v-tabs-items
            v-model="tabs1"
            class="transparent"
          >
            <v-tab-item>
              <div>
                <v-data-table
                  :headers="headersLastFive"
                  :items="fiveDaysDate"
                  :items-per-page="5"
                  class="elevation-1"
                >
                  <template v-slot:item.CountryCode="{ item }">
                    <img
                      :src="`https://webapps.klikpal.com:9004/countryflags/${item.CountryCode}.png`"
                      style="width: 25px; height: 25px"
                    >
                  </template>
                </v-data-table>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import Chartist from 'chartist'
  import * as ChartistTooltips from 'chartist-plugin-tooltips-updated'

  export default {
    name: 'DashboardDashboard',
    data () {
      return {
        pagination: {
          page: 1,
          total: 0,
          perPage: 0,
          visible: 7,
        },
        dailySalesChart: {
          data: {
            labels: [],
            series: [],
          },
          options: {
            plugins: [Chartist.plugins.tooltip({
              transformTooltipTextFnc: function (tooltip) {
                return 'Total IOs Users ' + '= ' + tooltip
              },
            })],
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 5,
            }),
            low: 0,
            high: 30, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        registerUsers: '',
        iosUsers: '',
        androidUsers: '',
        allRegisterUsers: '',
        todayUsers: '',
        todayiOSUsers: '',
        todayAndriodUsers: '',
        months: {
          1: 'Jan',
          2: 'Feb',
          3: 'Mar',
          4: 'Apr',
          5: 'May',
          6: 'Jun',
          7: 'Jul',
          8: 'Aug',
          9: 'Sep',
          10: 'Oct',
          11: 'Nov',
          12: 'Dec',
        },

        dataCompletedTasksChart: {
          data: {
            labels: [],
            series: [[]],
          },
          options: {
            plugins: [Chartist.plugins.tooltip({
              transformTooltipTextFnc: function (tooltip) {
                return 'Total Android Users ' + '= ' + tooltip
              },
            })],
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 5,
            }),
            // low: 550,
            // high: 1100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        emailsSubscriptionChart: {
          data: {
            labels: [],
            series: [[]],
          },
          options: {
            plugins: [Chartist.plugins.tooltip({
              transformTooltipTextFnc: function (tooltip) {
                return 'Total Users ' + '= ' + tooltip
              },
            })],
            scales: {
              xAxes: [{
                type: 'time',
                time: {
                  unit: 'day',
                },
              }],
            },
            axisX: {
              showGrid: false,
            },
            // low: 0,
            // high: 1000,
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
          responsiveOptions: [
            [
              'screen and (max-width: 640px)',
              {
                seriesBarDistance: 5,
                axisX: {
                  // labelInterpolationFnc: function (value) {
                  //   return value[0]
                  // },
                },
              },
            ],
          ],
        },
        headersLastFive: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'CountryCode',
          },
          { text: '', value: 'CountryName' },
          { text: 'Date1', align: 'end', value: 'todayCount' },
          { text: 'Date2', align: 'end', value: 'yesterdayCount' },
          { text: 'Date3', align: 'end', value: 'dayBeforeYesterdayCount' },
          { text: 'Date4', align: 'end', value: 'twoDayBeforeYesterdayCount' },
          { text: 'Date5', align: 'end', value: 'threeDayBeforeYesterdayCount' },
        ],
        headers: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'CountryCode',
          },
          { text: 'Countries', align: 'start', value: 'CountryName' },
          { text: 'Total Users', align: 'end', value: 'totalCount' },
          { text: 'Percentage (%)', align: 'end', value: 'Percentage' },
        ],
        headersiOS: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'CountryCode',
          },
          { text: 'Countries', align: 'start', value: 'CountryName' },
          { text: 'Total Users', align: 'end', value: 'totaliOSCount' },
          { text: 'Percentage (%)', align: 'end', value: 'Percentage' },
        ],
        headersAndroid: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'CountryCode',
          },
          { text: 'Countries', align: 'start', value: 'CountryName' },
          { text: 'Total Users', align: 'end', value: 'totalAndroidCount' },
          { text: 'Percentage (%)', align: 'end', value: 'Percentage' },
        ],

        allCountries: [],
        allCountiesiOS: [],
        allCountiesAndriod: [],
        topCountriesAll: [],
        topCountriesYesterday: [],
        topCountriesSevenDays: [],
        topCountriesNinetyDays: [],
        topCountriesThirtyDays: [],
        fiveDaysDate: [],
        days: {},
        change: '',
        changeiOS: '',
        changeAndroid: '',
        arrow: '',
        incdec: '',
        arrow1: '',
        incdec1: '',
        arrow2: '',
        incdec2: '',
        tabs: 0,
        tabs1: 0,
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        list: {
          0: false,
          1: false,
          2: false,
          3: false,
        },
      }
    },
    mounted () {
      const user = localStorage.getItem('user')
      if (!user) {
        // console.log('I am in login')
        this.$router.push('/login')
      }
      ChartistTooltips()
      // tooptip Starts
      // tooptip ends
      // console.log('Component Mounted')
      const dates = []
      const date = new Date()

      for (let i = 0; i < 5; i++) {
        const tempDate = new Date()
        tempDate.setDate(date.getDate() - i)
        const str = tempDate.getDate() + '/' + tempDate.toLocaleString('default', { month: 'short' })
        dates.push(str)
      }
      // console.log(dates)
      this.days = dates
      var key = user
      const urlCard = 'https://webapps.klikpal.com:9002/dashboard-api/statistics/dashboardsummary'

      const config = {
        method: 'post',
        url: urlCard,
        headers: {
          Authorization: key,
        },
      }

      axios(config)
        .then(response => {
          // console.log(JSON.stringify(response.data))
          const resp = response.data.data[0]
          this.registerUsers = resp.totalAppDownload
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          this.iosUsers = resp.totalIosDownload
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          this.androidUsers = resp.totalAndroidDownload
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          this.todayUsers = resp.TodayTotalCount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          this.todayiOSUsers = resp.TodayTotalIOSCount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          this.todayAndriodUsers = resp.TodayTotalAndroidCount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        })
        .catch(function (error) {
          return error
        })
      const urlCountryStat = 'https://webapps.klikpal.com:9002/dashboard-api/statistics/countrystatistics?countryStatistics=0'

      const configCountry = {
        method: 'post',
        url: urlCountryStat,
        headers: {
          Authorization: key,
        },
      }
      axios(configCountry)
        .then(response => {
          const resp = response.data.data
          this.allCountries = resp.allRegisteredUser
        })
      const urlCountryStatIOs = 'https://webapps.klikpal.com:9002/dashboard-api/statistics/countrystatistics?countryStatistics=1'

      const configCountryIOs = {
        method: 'post',
        url: urlCountryStatIOs,
        headers: {
          Authorization: key,
        },
      }
      axios(configCountryIOs)
        .then(response => {
          const resp = response.data.data
          this.allCountiesiOS = resp.allRegisteredUser
        })
      const urlCountryStatAnd = 'https://webapps.klikpal.com:9002/dashboard-api/statistics/countrystatistics?countryStatistics=2'

      const configCountryAnd = {
        method: 'post',
        url: urlCountryStatAnd,
        headers: {
          Authorization: key,
        },
      }
      axios(configCountryAnd)
        .then(response => {
          const resp = response.data.data
          this.allCountiesAndriod = resp.allRegisteredUser
        })
      const urlLastFiveDays = 'https://webapps.klikpal.com:9002/dashboard-api/statistics/last5dayshistory'

      const configLastFive = {
        method: 'post',
        url: urlLastFiveDays,
        headers: {
          Authorization: key,
        },
      }
      axios(configLastFive)
        .then(response => {
          const resp = response.data.data
          const allRegister = resp.allRegisteredUser
          const iosUsers = resp.iosRegisteredUser
          const androidUsers = resp.androidRegisteredUser
          const results = []
          allRegister.labels.map(date => new Date(date)).forEach(element => {
            const dateFormate = element.getDate() + '-' + this.months[(element.getMonth() + 1)]
            results.push(dateFormate)
          })
          const results1 = []
          iosUsers.labels.map(date => new Date(date)).forEach(element => {
            const dateFormate = element.getDate() + '-' + this.months[(element.getMonth() + 1)]
            results1.push(dateFormate)
          })
          const results2 = []
          androidUsers.labels.map(date => new Date(date)).forEach(element => {
            const dateFormate = element.getDate() + '-' + this.months[(element.getMonth() + 1)]
            results2.push(dateFormate)
          })
          this.emailsSubscriptionChart.data.labels = results
          this.emailsSubscriptionChart.data.series = allRegister.series
          const [lastOne] = allRegister.series[0].slice(Math.max(allRegister.series[0].length - 1))
          const [firstOne] = allRegister.series[0].slice(0, 1)
          const [lastOneiOS] = iosUsers.series[0].slice(Math.max(iosUsers.series[0].length - 1))
          const [firstOneiOS] = iosUsers.series[0].slice(0, 1)
          const [lastOneAndroid] = androidUsers.series[0].slice(Math.max(allRegister.series[0].length - 1))
          const [firstOneAndroid] = androidUsers.series[0].slice(0, 1)
          console.log('============================ values ============================')
          console.log(firstOneiOS, lastOneiOS)
          // console.log()
          console.log('============================ values ============================')

          if (lastOne > firstOne) {
            console.log('============================ I am in last one large then first one ============================')
            this.arrow = 'up'
            this.incdec = 'increase'
          } else if (firstOne > lastOne) {
            console.log('============================ I am in first one large then last one ============================')
            this.arrow = 'down'
            this.incdec = 'decrease'
          }

          if (lastOneiOS > firstOneiOS) {
            console.log('============================ I am in last one large then first one IOS ============================')
            this.arrow1 = 'up'
            this.incdec1 = 'increase'
          } else if (firstOneiOS > lastOneiOS) {
            console.log('============================ I am in first one large then last one IOS ============================')
            this.arrow1 = 'down'
            this.incdec1 = 'decrease'
          }
          if (lastOneAndroid > firstOneAndroid) {
            console.log('============================ I am in last one large then first one Android ============================')
            this.arrow2 = 'up'
            this.incdec2 = 'increase'
          } else if (firstOneAndroid > lastOneAndroid) {
            console.log('============================ I am in first one large then last one IOS ============================')
            this.arrow2 = 'down'
            this.incdec2 = 'decrease'
          }
          this.change = this.calcDiff(lastOne, firstOne).toFixed(2)
          this.changeiOS = this.calcDiff(lastOneiOS, firstOneiOS).toFixed(2)
          this.changeAndroid = this.calcDiff(lastOneAndroid, firstOneAndroid).toFixed(2)
          this.dailySalesChart.data.labels = results1
          this.dailySalesChart.data.series = iosUsers.series
          this.dataCompletedTasksChart.data.labels = results2
          this.dataCompletedTasksChart.data.series = androidUsers.series
        })
      const urlLastFiveDCountry = 'https://webapps.klikpal.com:9002/dashboard-api/statistics/lastdayfivedaycountrystatistics'

      const configFiveDCountry = {
        method: 'post',
        url: urlLastFiveDCountry,
        headers: {
          Authorization: key,
        },
        params: {
          skipItem: 0,
          pageSize: 5,
        },
      }
      axios(configFiveDCountry)
        .then(response => {
          // console.log(response)
          const resp = response.data.data[0]
          this.fiveDaysDate = resp
          // console.log(this.fiveDaysDate)
          this.days.map((dateFive, index) => {
            this.headersLastFive[index + 2].text = dateFive
          })
          return this.fiveDaysDate
        })
    },
    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
      calcDiff (a, b) {
        return a - b === 0 ? 0 : 100 * Math.abs((a - b) / b)
      },
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
.ct-series-a .ct-line {
  /* Set the colour of this series line */
  stroke: black;
  /* Control the thikness of your lines */
  stroke-width: 2px;
  /* Create a dashed line with a pattern */
  stroke-dasharray: 5px 1px;
}
</style>
