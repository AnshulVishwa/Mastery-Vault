Hello Everyone!

so first of all lets talk about why to use " useContext " ?

so to understand this just move to the problem folder and watch the code,
"App.jsx"
    we have a variable { name } and we have to pass it to component1 and component5
    theres no need of name in 2 3 4 but then tooo we have to pass name through each component
    so that 5th component can access it!

    it is just increasing the memory and overhead

That's why came "useContext"

in this hook we have 2 methods 
 -> createContext
        creates a contextwhich is to be passed further
        whenever you have to pass use
            < {contextName}.Provider value={ any value which you have to pass } >
                <Component />
            </ {contextName}.Provider >

 -> useContext
        used to use a created Context
        const anyname = useContext(contextName)

        { anyname }