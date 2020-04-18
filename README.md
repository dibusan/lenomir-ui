

#### Tutorial Links:
- [Angular material tutorial used to set up this project][1]
- [Markdown cheat sheet][2]
- [Updating child component Input][3]
    
    - Note that a child component's Input will automatically
    be updated if the value at its parent level is updated on the
    main thread, but if the update happens inside of an Observable's
    response, the change will NOT propagate to the child.

[1]: https://auth0.com/blog/creating-beautiful-apps-with-angular-material/
[2]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[3]: https://almerosteyn.com/2016/03/immutable-component-input-from-observable
