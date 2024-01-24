<script setup lang="ts">

</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      header="Технические характеристики"
      :pt="{ headerAction: { class: 'flex flex-row-reverse items-center gap-[21px]' }, headerTitle: { class: 'text-xl2 font-medium font-sans text-gray300' }, header: { class: 'flex py-0 pr-0 pl-6' }, headerIcon: ({ context }) => ({ class: context.active ? 'w-5 h-5 rotate-180' : 'w-5 h-5 rotate-90' }), content: { class: 'b-transparent font-sans text-black' } }"
    >
      <table class="flex tablet:overflow-x-auto">
        <tr class="flex flex-col items-start text-m">
          <th class="pt-5 pb-2 text-start font-normal ml-6 w-[300px] border-b border-solid border-gray100 laptop:w-[270px] tablet:w-[230px]">
            Высота борта
          </th>
          <th class="pt-5 pb-2 text-start font-normal ml-6 w-[300px] border-b border-solid border-gray100 laptop:w-[270px] tablet:w-[230px]">
            Ширина основания
          </th>
          <th class="pt-5 pb-2 text-start font-normal ml-6 w-[300px] border-b border-solid border-gray100 laptop:w-[270px] tablet:w-[230px]">
            Длина основания
          </th>
          <th class="pt-5 pb-2 text-start font-normal ml-6 w-[300px] border-b border-solid border-gray100 laptop:w-[270px] tablet:w-[230px]">
            Толщина металла
          </th>
          <th class="pt-5 pb-2 text-start font-normal ml-6 w-[300px] border-b border-solid border-gray100 laptop:w-[270px] tablet:w-[230px]">
            Материал
          </th>
          <th class="pt-5 pb-2 text-start font-normal ml-6 w-[300px] border-b border-solid border-gray100 laptop:w-[270px] tablet:w-[230px]">
            Вес
          </th>
          <th class="pt-5 pb-2 text-start font-normal ml-6 w-[300px] border-b border-solid border-gray100 laptop:w-[270px] tablet:w-[230px]">
            Климатическое исполнение
          </th>
        </tr>
        <tr class="flex flex-col text-s lining-nums proportional-nums">
          <td class="pt-[22px] pb-2.5 text-center w-[200px] border-b border-r border-solid border-gray100 laptop:w-[170px] tablet:w-[130px]">
            50 мм
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[200px] border-b border-r border-solid border-gray100 laptop:w-[170px] tablet:w-[130px]">
            1000 мм
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[200px] border-b border-r border-solid border-gray100 laptop:w-[170px] tablet:w-[130px]">
            2000 мм
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[200px] border-b border-r border-solid border-gray100 laptop:w-[170px] tablet:w-[130px]">
            5 мм
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[200px] border-b border-r border-solid border-gray100 laptop:w-[170px] tablet:w-[130px]">
            металл
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[200px] border-b border-r border-solid border-gray100 laptop:w-[170px] tablet:w-[130px]">
            1 кг
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[200px] border-b border-r border-solid border-gray100 laptop:w-[170px] tablet:w-[130px]">
            Красный
          </td>
        </tr>
        <tr class="flex flex-col text-s lining-nums proportional-nums">
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            50 мм
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            1000 мм
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            2000 мм
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            5 мм
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            металл
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            1 кг
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            Красный
          </td>
        </tr>
        <tr class="flex flex-col text-s lining-nums proportional-nums">
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            50 мм
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            1000 мм
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            2000 мм
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            5 мм
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            металл
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            1 кг
          </td>
          <td class="pt-[22px] pb-2.5 text-center w-[230px] border-b border-r border-solid border-gray100 laptop:w-[200px] tablet:w-[170px]">
            Красный
          </td>
        </tr>
        <tr class="flex flex-col text-s w-full lining-nums proportional-nums">
          <td class="pt-[22px] pb-2.5 pl-[61px] border-b border-solid border-gray100 laptop:pl-14 tablet:w-[170px]">
            50 мм
          </td>
          <td class="pt-[22px] pb-2.5 pl-[61px] border-b border-solid border-gray100 laptop:pl-14 tablet:w-[170px]">
            1000 мм
          </td>
          <td class="pt-[22px] pb-2.5 pl-[61px] border-b border-solid border-gray100 laptop:pl-14 tablet:w-[170px]">
            2000 мм
          </td>
          <td class="pt-[22px] pb-2.5 pl-[61px] border-b border-solid border-gray100 laptop:pl-14 tablet:w-[170px]">
            5 мм
          </td>
          <td class="pt-[22px] pb-2.5 pl-[61px] border-b border-solid border-gray100 laptop:pl-14 tablet:w-[170px]">
            металл
          </td>
          <td class="pt-[22px] pb-2.5 pl-[61px] border-b border-solid border-gray100 laptop:pl-14 tablet:w-[170px]">
            1 кг
          </td>
          <td class="pt-[22px] pb-2.5 pl-[61px] border-b border-solid border-gray100 laptop:pl-14 tablet:w-[170px]">
            Красный
          </td>
        </tr>
      </table>
    </AccordionTab>
  </Accordion>
</template>
