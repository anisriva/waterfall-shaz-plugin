// import { QueryFormData, t } from '@superset-ui/core';
// import { ControlConfig, SelectControlConfig } from '@superset-ui/chart-controls/lib/types';
// import { SortingType, SortingTypeNames } from '../utils';

// type Sorting = [
//   { name: string; config: ControlConfig<'CheckboxControl'> },
//   { name: string; config: SelectControlConfig<{ value: SortingType; label: string }, 'SelectControl'> },
// ];

// const orderBy: Sorting[] = [];

// const getOrderByRow = ({
//   name,
//   title,
//   renderTrigger = false,
// }: {
//   name: string;
//   title: string;
//   renderTrigger?: boolean;
// }): Sorting => [
//   {
//     name: `use_order_by_${name}`,
//     config: {
//       type: 'CheckboxControl',
//       label: t(`Use sorting for ${title}`),
//       default: false,
//       renderTrigger,
//       description: t(`Use sorting for ${title}`),
//     },
//   },
//   {
//     name: `order_by_${name}`,
//     config: {
//       label: t(`Sorting type ${title}`),
//       type: 'SelectControl',
//       clearable: false,
//       options: Object.values(SortingType).map(key => ({
//         value: key,
//         label: SortingTypeNames[key],
//       })),
//       renderTrigger,
//       visibility: ({ form_data }: { form_data: QueryFormData }) => !!form_data[`use_order_by_${name}`],
//       default: SortingType.ASC,
//       description: t(`Set Ascending / Descending sorting for ${title}`),
//     },
//   },
// ];

// [
//   { title: t('"xAxis Column"'), name: 'x_axis_column' },
//   { title: t('"Period Column"'), name: 'period_column' },
//   { title: t('"Metric"'), name: 'metric' },
//   { title: t('"Change"'), name: 'change', renderTrigger: true },
// ].forEach(item => {
//   orderBy.push(getOrderByRow(item));
// });

// export { orderBy };