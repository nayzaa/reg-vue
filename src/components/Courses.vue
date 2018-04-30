<template>
  <div class="uk-container">

      <div class="content box">
          <h4 class="uk-heading-divider">Search<span></span></h4>
      </div>

      <div class="content box">
          <ul uk-accordion="multiple: true">
              <li>
                  <a class="uk-accordion-title" href="#">012200 - MIND VOLUNTEER (3 Section)</a>
                  <div class="uk-accordion-content">
                      <div class="uk-overflow-auto">
                          <table class="uk-table uk-table-justify uk-table-divider uk-table-striped">
                              <thead>
                                  <tr>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Section</th>
                                      <th class="uk-width-1-3 uk-table-middle uk-text-center" rowspan="2">Teacher</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" colspan="2">Credit</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Day</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Time</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Room</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Seat</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Enroll</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Add</th>
                                  </tr>
                                  <tr>
                                      <th class="uk-width-auto uk-table-middle uk-text-center">lec</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center">lab</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td class="uk-text-center">001</td>
                                      <td class="uk-text-center">Rapee Sangsakorn</td>
                                      <td class="uk-text-center">3</td>
                                      <td class="uk-text-center">0</td>
                                      <td class="uk-text-center">TuF</td>
                                      <td class="uk-text-center">12.30-15.30</td>
                                      <td class="uk-text-center">AKB4801</td>
                                      <td class="uk-text-center">35</td>
                                      <td class="uk-text-center"><span class="uk-label">35</span></td>
                                      <td class="uk-text-center"><button class="uk-button uk-button-disable" type="button">Add</button></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Courses'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
