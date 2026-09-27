GARBAGE COLLECTION 

# REACHABILITY 
The main concept of memory management in JavaScript is reachability.

Simply put, “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.

    There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.

    For instance:
        The currently executing function, its local variables and parameters.
        Other functions on the current chain of nested calls, their local variables and parameters.
        Global variables.
        (there are some other, internal ones as well)

    These values are called roots.

    Any other value is considered reachable if it’s reachable from a root by a reference or by a chain of references.

    For instance, if there’s an object in a global variable, and that object has a property referencing another object, that object is considered reachable. And those that it references are also reachable. Detailed examples to follow.

*** only incoming refrences make an object reachab;e . ****

# INTERNAL ALGORITHM 

The basic garbage collection algorithm is called “mark-and-sweep”.

The following “garbage collection” steps are regularly performed:

    The garbage collector takes roots and “marks” (remembers) them.
    Then it visits and “marks” all references from them.
    Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
    …And so on until every reachable (from the roots) references are visited.
    All objects except marked ones are removed.



Two precise points worth remembering:

1.The ECMAScript spec doesn't mandate a GC algorithm. Each engine (V8, SpiderMonkey, JavaScriptCore) implements its own.
2.You can't trigger or schedule collection from normal code. It is non-deterministic.