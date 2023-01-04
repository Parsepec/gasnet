<template>
            <div class=" pt-3 border border-slate-200 rounded-lg mb-8">
            <div class="px-10 py-6">
                <h1 class="font-semibold text-2xl">Remaining Fuel</h1>
                <p class="font-medium tracking-wider text-xl text-gray-500">TANK 1 - PMS (Totalizer Readings)</p>
            </div>
          <table class=" table-auto w-full">
            <thead class="py-4 font-[300] text-gray-500">
              <tr class="py-4 font-[300]">
                <th class="font-[300] py-4">Pump No</th>
                <th class="font-[300]">Shift Start(L)</th>
                <th class="font-[300]">Shift End(L)</th>
                <th class="font-[300]">Fuel Pumped(L)</th>
                <th class="font-[300]">Testing fueling</th>
                <th class="font-[300]">Fuel Level</th>

              </tr>
            </thead>
            <tbody class="border border-slate-200">
              <tr>
                <td class="text-center">1</td>
                <td class="text-center py-3">0.00</td>
                <td class="text-center py-3">0.00</td>

              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center py-3">1,675,694.36</td>
                <td class="text-center py-3">1,675,881.33</td>
                <td class="text-center py-3">186.97</td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center py-3">48.62</td>
                <td class="text-center py-3">48.62</td>
                <td class="text-center py-3"></td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td class="text-center py-3">1,543,341.28</td>
                <td class="text-center py-3">1,543,341.28</td>
                <td class="text-center py-3"></td>

              </tr>
            </tbody>
          </table>
        </div>

</template>