import { BrandPython } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.python-stringify.title'),
  path: '/python-stringify',
  description: translate('tools.python-stringify.description'),
  keywords: ['python', 'stringify'],
  component: () => import('./python-stringify.vue'),
  icon: BrandPython,
  createdAt: new Date('2024-02-09'),
});
