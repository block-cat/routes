import DefaultRoutesPage from './components/DefaultRoutesPage';

app.initializers.add('block-cat/routes', () => {
  app.extensionData.for('block-cat-routes')
    .registerPage(DefaultRoutesPage);
});
