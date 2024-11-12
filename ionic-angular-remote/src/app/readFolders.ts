
      export default function() {
        return [{
          path: 'folder_1',
          importPath: './containers/folder_1/folder_1_1',
          moduleName: 'HomePageF1Module',
          loadChildren: () => import('./containers/folder_1/folder_1_1/folder_1_1.module').then((m) => m.HomePageF1Module)
        },{
          path: 'folder_2',
          importPath: './containers/folder_2',
          moduleName: 'HomePageF2Module',
          loadChildren: () => import('./containers/folder_2/folder_22.module').then((m) => m.HomePageF2Module)
        }]
      }
    