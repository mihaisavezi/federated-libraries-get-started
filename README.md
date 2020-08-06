# A Webpack 5 Federation Boilerplate

See the accompanying article at: [https://federated-libraries.now.sh/get-started](https://federated-libraries.now.sh/get-started)

run `yarn dev` to start the applications

# Issue
`application-a` exposes `SharedFromA` to `application-b` and imports `AppAgendaChild`
`application-b` exposes `AppAgendaChild` to `application-a` but it imports {SharedFromA} from 'application_a/SharedFromA';

# expected result

in `application-a` I want to use `AppAgendaChild` from `application-b` :warning: but `AppAgendaChild` imports `SharedFromA` from `application-a`

I expect this to work in a way that the `application-a` has access to the remote's exposed module, as well as its dependencies, in this case, its something that `application-a` itself exposes. 
```
```