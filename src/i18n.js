import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'How to use?': 'How to use?',
          'Reset': 'Reset',
          'Undo': 'Undo',
          'Redo': 'Redo',
          'Format CSS': 'Format CSS',
          'Copy CSS': 'Copy CSS',
          'Download CSS': 'Download CSS',
          'Save': 'Save',
          'Show Saves': 'Show Saves',
          'Hide Saves': 'Hide Saves',
          'Replay Animation': 'Replay Animation',
          'Desktop': 'Desktop',
          'Tablet': 'Tablet',
          'Mobile': 'Mobile',
          'Device': 'Device',
          'Theme': 'Theme',
          'Import HTML': 'Import HTML',
          'Import CSS': 'Import CSS',
          'Export to PDF': 'Export to PDF',
          'Export to CodePen': 'Export to CodePen',
          'Export to JSFiddle': 'Export to JSFiddle',
          'Upload Image': 'Upload Image',
          'Choose Color': 'Choose Color',
          'Font': 'Font',
          'Accessibility Audit': 'Accessibility Audit',
          'No issues found': 'No issues found',
          'Issues found': 'Issues found',
          'Print': 'Print'
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n; 