in vite.config.js:
resolve: { alias: { ... } } allows for absolute imports. that way we don't need to change paths for imports

we created jsconfig.json to support this

<React.Fragment> or <></> :
allows us to wrap elements in a return without creating an additional node in the DOM. sometimes React.Fragment must be used over <></>

Props:
similiar to attributes in an HTML element
ex:
<input type="submit" value="Submit" />
type and value are props

State:
used in a component if data changes over time
components are local and specific to a component
it is not accessible to toher components unless the holder passes it down to a child component
when state data is passed down to a child component, it is passed as a prop
