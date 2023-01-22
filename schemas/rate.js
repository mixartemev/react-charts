export default {
  name: 'rate',
  type: 'document',
  title: 'Rate',
  fields: [
    {
      name: 'coin',
      type: 'reference',
      to: [{ type: 'coin' }]
    },
    {
      name: 'cur',
      type: 'reference',
      to: [{ type: 'cur' }]
    },
    {
      name: 'value',
      type: 'number'
    },
    {
      name: 'isSell',
      type: 'boolean'
    },
  ]
}