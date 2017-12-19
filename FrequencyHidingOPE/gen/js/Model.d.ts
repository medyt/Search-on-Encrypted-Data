declare module java {
    module lang {
        class System {
            static gc(): void;
            static arraycopy(src: any[] | Float64Array | Int32Array, srcPos: number, dest: any[] | Float64Array | Int32Array, destPos: number, numElements: number): void;
        }
        interface Runnable {
            run(): void;
        }
        class StringBuilder {
            private _buffer;
            length: number;
            append(val: any): StringBuilder;
            toString(): string;
        }
    }
    module util {
        module concurrent {
            module atomic {
                class AtomicIntegerArray {
                    _internal: Int32Array;
                    constructor(p: Int32Array);
                    set(index: number, newVal: number): void;
                    get(index: number): number;
                    getAndSet(index: number, newVal: number): number;
                    compareAndSet(index: number, expect: number, update: number): boolean;
                }
                class AtomicReference<A> {
                    _internal: A;
                    compareAndSet(expect: A, update: A): boolean;
                    get(): A;
                    set(newRef: A): void;
                    getAndSet(newVal: A): A;
                }
                class AtomicLong {
                    _internal: number;
                    constructor(init: number);
                    compareAndSet(expect: number, update: number): boolean;
                    get(): number;
                    incrementAndGet(): number;
                    decrementAndGet(): number;
                }
                class AtomicInteger {
                    _internal: number;
                    constructor(init: number);
                    compareAndSet(expect: number, update: number): boolean;
                    get(): number;
                    set(newVal: number): void;
                    getAndSet(newVal: number): number;
                    incrementAndGet(): number;
                    decrementAndGet(): number;
                    getAndIncrement(): number;
                    getAndDecrement(): number;
                }
            }
        }
        class Random {
            nextInt(max?: number): number;
            nextDouble(): number;
            nextBoolean(): boolean;
        }
        class Arrays {
            static fill(data: any, begin: number, nbElem: number, param: number): void;
        }
        class Collections {
            static reverse<A>(p: List<A>): void;
            static sort<A>(p: List<A>): void;
        }
        interface Collection<T> {
            add(val: T): void;
            addAll(vals: Collection<T>): void;
            remove(val: T): void;
            clear(): void;
            isEmpty(): boolean;
            size(): number;
            contains(val: T): boolean;
            toArray(a: Array<T>): T[];
        }
        class XArray {
            length: number;
            constructor();
            pop(): any;
            push(val: any): number;
            splice(newS: any, arrL: any): void;
            indexOf(val: any): number;
            shift(): any;
            sort(): void;
        }
        class List<T> extends XArray implements Collection<T> {
            addAll(vals: Collection<T>): void;
            clear(): void;
            poll(): T;
            remove(val: T): void;
            toArray(a: Array<T>): T[];
            size(): number;
            add(val: T): void;
            get(index: number): T;
            contains(val: T): boolean;
            isEmpty(): boolean;
        }
        class ArrayList<T> extends List<T> {
        }
        class LinkedList<T> extends List<T> {
        }
        class Stack<T> {
            content: any[];
            pop(): T;
            push(t: T): void;
            isEmpty(): boolean;
            peek(): T;
        }
        class Map<K, V> {
            get(key: K): V;
            put(key: K, value: V): V;
            containsKey(key: K): boolean;
            remove(key: K): V;
            keySet(): Set<K>;
            isEmpty(): boolean;
            values(): Set<V>;
            clear(): void;
        }
        class HashMap<K, V> extends Map<K, V> {
        }
        class Set<T> implements Collection<T> {
            add(val: T): void;
            clear(): void;
            contains(val: T): boolean;
            addAll(vals: Collection<T>): void;
            remove(val: T): void;
            size(): number;
            isEmpty(): boolean;
            toArray(a: Array<T>): T[];
        }
        class HashSet<T> extends Set<T> {
        }
    }
}
declare module org {
    module kevoree {
        module modeling {
            interface KCallback<A> {
                (a: A): void;
            }
            class KConfig {
                static CAS_MAX_TRY: number;
                static CALLBACK_HISTORY: number;
                static LONG_SIZE: number;
                static PREFIX_SIZE: number;
                static BEGINNING_OF_TIME: number;
                static END_OF_TIME: number;
                static NULL_LONG: number;
                static KEY_PREFIX_MASK: number;
                static KEY_SEP: string;
                static ELEM_SEP: string;
                static VAL_SEP: string;
                static CHUNK_ELEM_SEP: string;
                static CHUNK_VAL_SEP: string;
                static CACHE_INIT_SIZE: number;
                static CACHE_LOAD_FACTOR: number;
            }
            class KContentKey {
                static NULL_KEY: Float64Array;
                static GLOBAL_UNIVERSE_KEY: Float64Array;
                universe: number;
                time: number;
                obj: number;
                static toString(keys: Float64Array, keyIndex: number): string;
                constructor(p_universeID: number, p_timeID: number, p_objID: number);
                static createObject(p_universeID: number, p_quantaID: number, p_objectID: number): org.kevoree.modeling.KContentKey;
                static createGlobalUniverseTree(): org.kevoree.modeling.KContentKey;
                static createRootUniverseTree(): org.kevoree.modeling.KContentKey;
                static createLastPrefix(): org.kevoree.modeling.KContentKey;
                static create(payload: string): org.kevoree.modeling.KContentKey;
                equals(param: any): boolean;
            }
            interface KListener {
                universe(): number;
                listenObjects(): Float64Array;
                listen(obj: org.kevoree.modeling.KObject): void;
                destroy(): void;
                then(updatedObjects: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
            }
            interface KModel<A extends org.kevoree.modeling.KUniverse<any, any>> {
                key(): number;
                newUniverse(): A;
                universe(key: number): A;
                manager(): org.kevoree.modeling.memory.manager.KDataManager;
                metaModel(): org.kevoree.modeling.meta.KMetaModel;
                defer(): org.kevoree.modeling.defer.KDefer;
                setOperation(metaOperation: org.kevoree.modeling.meta.KMetaOperation, operation: org.kevoree.modeling.KOperation<any, any>): void;
                setOperationByName(metaClassName: string, metaOperationName: string, operation: org.kevoree.modeling.KOperation<any, any>): void;
                save(callback: org.kevoree.modeling.KCallback<any>): void;
                connect(callback: org.kevoree.modeling.KCallback<any>): void;
                disconnect(callback: org.kevoree.modeling.KCallback<any>): void;
                lookup(universe: number, time: number, uuid: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                lookupAllObjects(universe: number, time: number, uuids: Float64Array, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                lookupAllTimes(universe: number, times: Float64Array, uuid: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                createPreparedLookup(size: number): org.kevoree.modeling.KPreparedLookup;
                lookupPrepared(prepared: org.kevoree.modeling.KPreparedLookup, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                createByName(metaClassName: string, universe: number, time: number): org.kevoree.modeling.KObject;
                create(clazz: org.kevoree.modeling.meta.KMetaClass, universe: number, time: number): org.kevoree.modeling.KObject;
                createListener(universe: number): org.kevoree.modeling.KListener;
                createModelContext(): org.kevoree.modeling.KModelContext;
                createTraversal(startingElements: org.kevoree.modeling.KObject[]): org.kevoree.modeling.traversal.KTraversal;
                createReusableTraversal(): org.kevoree.modeling.traversal.KTraversal;
            }
            interface KModelContext {
                set(originTime: number, maxTime: number, originUniverse: number, maxUniverse: number): void;
                originTime(): number;
                originUniverse(): number;
                maxTime(): number;
                maxUniverse(): number;
                listen(callback: org.kevoree.modeling.KCallback<Float64Array>): void;
                model(): org.kevoree.modeling.KModel<any>;
            }
            interface KObject {
                universe(): number;
                now(): number;
                uuid(): number;
                metaClass(): org.kevoree.modeling.meta.KMetaClass;
                visitAttributes(visitor: org.kevoree.modeling.traversal.visitor.KModelAttributeVisitor): void;
                visit(visitor: org.kevoree.modeling.traversal.visitor.KModelVisitor, callback: org.kevoree.modeling.KCallback<any>): void;
                traversal(): org.kevoree.modeling.traversal.KTraversal;
                jump(time: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                select(query: string, callback: org.kevoree.modeling.KCallback<any[]>): void;
                detach(cb: org.kevoree.modeling.KCallback<any>): void;
                addByName(metaRelationName: string, objToAdd: org.kevoree.modeling.KObject): void;
                add(metaRelation: org.kevoree.modeling.meta.KMetaRelation, objToAdd: org.kevoree.modeling.KObject): void;
                removeByName(metaRelationName: string, objToRemove: org.kevoree.modeling.KObject): void;
                remove(metaRelation: org.kevoree.modeling.meta.KMetaRelation, objToRemove: org.kevoree.modeling.KObject): void;
                addAllByName(metaRelationName: string, objsToAdd: org.kevoree.modeling.KObject[]): void;
                addAll(metaRelation: org.kevoree.modeling.meta.KMetaRelation, objsToAdd: org.kevoree.modeling.KObject[]): void;
                removeAllByName(metaRelationName: string, callback: org.kevoree.modeling.KCallback<any>): void;
                removeAll(metaRelation: org.kevoree.modeling.meta.KMetaRelation, callback: org.kevoree.modeling.KCallback<any>): void;
                getRelationByName(metaRelationName: string, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                getRelation(metaRelation: org.kevoree.modeling.meta.KMetaRelation, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                getRelationValuesByName(metaRelationName: string): Float64Array;
                getRelationValues(metaRelation: org.kevoree.modeling.meta.KMetaRelation): Float64Array;
                get(metaAttribute: org.kevoree.modeling.meta.KMetaAttribute): any;
                getByName(metaAttributeName: string): any;
                set(metaAttribute: org.kevoree.modeling.meta.KMetaAttribute, payload: any): void;
                setByName(metaAttributeName: string, payload: any): void;
                timeDephasing(): number;
                allTimes(cb: org.kevoree.modeling.KCallback<Float64Array>): void;
                timesBefore(endOfSearch: number, cb: org.kevoree.modeling.KCallback<Float64Array>): void;
                timesAfter(beginningOfSearch: number, cb: org.kevoree.modeling.KCallback<Float64Array>): void;
                timesBetween(beginningOfSearch: number, endOfSearch: number, cb: org.kevoree.modeling.KCallback<Float64Array>): void;
                toJSON(): string;
                equals(other: any): boolean;
                referencesWith(o: org.kevoree.modeling.KObject): org.kevoree.modeling.meta.KMetaRelation[];
                invokeOperation(operation: org.kevoree.modeling.meta.KMetaOperation, params: any[], strategy: org.kevoree.modeling.operation.KOperationStrategy, cb: org.kevoree.modeling.KCallback<any>): void;
                invokeOperationByName(operationName: string, params: any[], strategy: org.kevoree.modeling.operation.KOperationStrategy, cb: org.kevoree.modeling.KCallback<any>): void;
                manager(): org.kevoree.modeling.memory.manager.KDataManager;
            }
            interface KObjectInfer extends org.kevoree.modeling.KObject {
                genericTrain(dependencies: org.kevoree.modeling.KObject[], expectedOutputs: any[], callback: org.kevoree.modeling.KCallback<any>): void;
                genericTrainAll(trainingSet: org.kevoree.modeling.KObject[][], expectedResultSet: any[][], callback: org.kevoree.modeling.KCallback<any>): void;
                genericInfer(features: org.kevoree.modeling.KObject[], callback: org.kevoree.modeling.KCallback<any[]>): void;
                genericInferAll(features: org.kevoree.modeling.KObject[][], callback: org.kevoree.modeling.KCallback<any[][]>): void;
                resetLearning(): void;
            }
            interface KOperation<SourceObject extends org.kevoree.modeling.KObject, ResultType> {
                (source: SourceObject, params: any[], result: org.kevoree.modeling.KCallback<ResultType>): void;
            }
            interface KPreparedLookup {
                addLookupOperation(universe: number, time: number, uuid: number): void;
                flatLookup(): Float64Array;
            }
            interface KType {
                name(): string;
                id(): number;
            }
            interface KUniverse<A extends org.kevoree.modeling.KView, B extends org.kevoree.modeling.KUniverse<any, any>> {
                key(): number;
                time(timePoint: number): A;
                diverge(): B;
                equals(other: any): boolean;
                lookupAllTimes(uuid: number, times: Float64Array, cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                createListener(): org.kevoree.modeling.KListener;
            }
            interface KView {
                createByName(metaClassName: string): org.kevoree.modeling.KObject;
                create(clazz: org.kevoree.modeling.meta.KMetaClass): org.kevoree.modeling.KObject;
                select(query: string, cb: org.kevoree.modeling.KCallback<any[]>): void;
                lookup(key: number, cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                lookupAll(keys: Float64Array, cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                universe(): number;
                now(): number;
                json(): org.kevoree.modeling.format.KModelFormat;
                equals(other: any): boolean;
                setRoot(elem: org.kevoree.modeling.KObject, cb: org.kevoree.modeling.KCallback<any>): void;
                getRoot(cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
            }
            module abs {
                class AbstractDataType implements org.kevoree.modeling.KType {
                    private _name;
                    private _id;
                    constructor(p_name: string, p_id: number);
                    name(): string;
                    id(): number;
                }
                class AbstractKModel<A extends org.kevoree.modeling.KUniverse<any, any>> implements org.kevoree.modeling.KModel<A> {
                    _manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager;
                    private _key;
                    constructor(p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager);
                    metaModel(): org.kevoree.modeling.meta.KMetaModel;
                    connect(cb: org.kevoree.modeling.KCallback<any>): void;
                    disconnect(cb: org.kevoree.modeling.KCallback<any>): void;
                    manager(): org.kevoree.modeling.memory.manager.KDataManager;
                    newUniverse(): A;
                    internalCreateUniverse(universe: number): A;
                    internalCreateObject(universe: number, time: number, uuid: number, clazz: org.kevoree.modeling.meta.KMetaClass, previousUniverse: number, previousTime: number): org.kevoree.modeling.KObject;
                    createProxy(universe: number, time: number, uuid: number, clazz: org.kevoree.modeling.meta.KMetaClass, previousUniverse: number, previousTime: number): org.kevoree.modeling.KObject;
                    universe(key: number): A;
                    save(callback: org.kevoree.modeling.KCallback<any>): void;
                    setOperation(metaOperation: org.kevoree.modeling.meta.KMetaOperation, operation: org.kevoree.modeling.KOperation<any, any>): void;
                    setOperationByName(metaClassName: string, metaOperationName: string, operation: org.kevoree.modeling.KOperation<any, any>): void;
                    defer(): org.kevoree.modeling.defer.KDefer;
                    key(): number;
                    create(clazz: org.kevoree.modeling.meta.KMetaClass, universe: number, time: number): org.kevoree.modeling.KObject;
                    createByName(metaClassName: string, universe: number, time: number): org.kevoree.modeling.KObject;
                    lookup(p_universe: number, p_time: number, p_uuid: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                    lookupAllObjects(p_universe: number, p_time: number, p_uuids: Float64Array, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                    lookupAllTimes(p_universe: number, p_times: Float64Array, p_uuids: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                    createPreparedLookup(p_size: number): org.kevoree.modeling.KPreparedLookup;
                    lookupPrepared(p_prepared: org.kevoree.modeling.KPreparedLookup, p_callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                    createListener(universe: number): org.kevoree.modeling.KListener;
                    createModelContext(): org.kevoree.modeling.KModelContext;
                    createTraversal(startingElements: org.kevoree.modeling.KObject[]): org.kevoree.modeling.traversal.KTraversal;
                    createReusableTraversal(): org.kevoree.modeling.traversal.KTraversal;
                }
                class AbstractKModelContext implements org.kevoree.modeling.KModelContext {
                    static ORIGIN_TIME: number;
                    static MAX_TIME: number;
                    static ORIGIN_UNIVERSE: number;
                    static MAX_UNIVERSE: number;
                    static NB_ELEM: number;
                    private _callbacks;
                    private _bounds;
                    private _origin;
                    constructor(p_origin: org.kevoree.modeling.KModel<any>);
                    set(p_originTime: number, p_maxTime: number, p_originUniverse: number, p_maxUniverse: number): void;
                    originTime(): number;
                    originUniverse(): number;
                    maxTime(): number;
                    maxUniverse(): number;
                    listen(new_callback: org.kevoree.modeling.KCallback<Float64Array>): void;
                    model(): org.kevoree.modeling.KModel<any>;
                }
                class AbstractKObject implements org.kevoree.modeling.KObject {
                    _uuid: number;
                    _time: number;
                    _universe: number;
                    _metaClass: org.kevoree.modeling.meta.KMetaClass;
                    _manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager;
                    private static OUT_OF_CACHE_MSG;
                    private _previousResolveds;
                    static UNIVERSE_PREVIOUS_INDEX: number;
                    static TIME_PREVIOUS_INDEX: number;
                    constructor(p_universe: number, p_time: number, p_uuid: number, p_metaClass: org.kevoree.modeling.meta.KMetaClass, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager, p_actualUniverse: number, p_actualTime: number);
                    previousResolved(): java.util.concurrent.atomic.AtomicReference<Float64Array>;
                    timeDephasing(): number;
                    uuid(): number;
                    metaClass(): org.kevoree.modeling.meta.KMetaClass;
                    now(): number;
                    universe(): number;
                    detach(callback: org.kevoree.modeling.KCallback<any>): void;
                    select(query: string, cb: org.kevoree.modeling.KCallback<any[]>): void;
                    get(p_attribute: org.kevoree.modeling.meta.KMetaAttribute): any;
                    getByName(attributeName: string): any;
                    set(p_attribute: org.kevoree.modeling.meta.KMetaAttribute, payload: any): void;
                    setByName(attributeName: string, payload: any): void;
                    addByName(relationName: string, objToAdd: org.kevoree.modeling.KObject): void;
                    add(p_metaReference: org.kevoree.modeling.meta.KMetaRelation, objToAdd: org.kevoree.modeling.KObject): void;
                    private internal_add(p_metaReference, p_param, p_setOpposite);
                    removeByName(relationName: string, objToAdd: org.kevoree.modeling.KObject): void;
                    remove(p_metaReference: org.kevoree.modeling.meta.KMetaRelation, objToRemove: org.kevoree.modeling.KObject): void;
                    private internal_remove(p_metaReference, objToRemove, p_setOpposite);
                    addAllByName(p_metaRelationName: string, objsToAdd: org.kevoree.modeling.KObject[]): void;
                    addAll(p_metaRelation: org.kevoree.modeling.meta.KMetaRelation, objsToAdd: org.kevoree.modeling.KObject[]): void;
                    removeAllByName(p_metaRelationName: string, callback: org.kevoree.modeling.KCallback<any>): void;
                    removeAll(p_metaRelation: org.kevoree.modeling.meta.KMetaRelation, callback: org.kevoree.modeling.KCallback<any>): void;
                    private internal_removeAll(p_metaRelation, callback);
                    size(p_metaReference: org.kevoree.modeling.meta.KMetaRelation): number;
                    getRelationByName(p_metaRelationName: string, cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                    getRelation(p_metaReference: org.kevoree.modeling.meta.KMetaRelation, cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                    private internal_getRelation(p_transposedRelation, cb);
                    getRelationValuesByName(p_refName: string): Float64Array;
                    getRelationValues(metaRelation: org.kevoree.modeling.meta.KMetaRelation): Float64Array;
                    private internal_getRefValues(transposedReference);
                    visitAttributes(visitor: org.kevoree.modeling.traversal.visitor.KModelAttributeVisitor): void;
                    visit(p_visitor: org.kevoree.modeling.traversal.visitor.KModelVisitor, cb: org.kevoree.modeling.KCallback<any>): void;
                    private internal_visit(visitor, end, visited, traversed);
                    toJSON(): string;
                    toString(): string;
                    equals(obj: any): boolean;
                    hashCode(): number;
                    jump(p_time: number, p_callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                    internal_transpose_ref(p: org.kevoree.modeling.meta.KMetaRelation): org.kevoree.modeling.meta.KMetaRelation;
                    internal_transpose_att(p: org.kevoree.modeling.meta.KMetaAttribute): org.kevoree.modeling.meta.KMetaAttribute;
                    internal_transpose_op(p: org.kevoree.modeling.meta.KMetaOperation): org.kevoree.modeling.meta.KMetaOperation;
                    traversal(): org.kevoree.modeling.traversal.KTraversal;
                    referencesWith(o: org.kevoree.modeling.KObject): org.kevoree.modeling.meta.KMetaRelation[];
                    invokeOperation(p_operation: org.kevoree.modeling.meta.KMetaOperation, p_params: any[], strategy: org.kevoree.modeling.operation.KOperationStrategy, cb: org.kevoree.modeling.KCallback<any>): void;
                    invokeOperationByName(operationName: string, p_params: any[], strategy: org.kevoree.modeling.operation.KOperationStrategy, cb: org.kevoree.modeling.KCallback<any>): void;
                    manager(): org.kevoree.modeling.memory.manager.KDataManager;
                    private internal_times(start, end, cb);
                    allTimes(cb: org.kevoree.modeling.KCallback<Float64Array>): void;
                    timesBefore(endOfSearch: number, cb: org.kevoree.modeling.KCallback<Float64Array>): void;
                    timesAfter(beginningOfSearch: number, cb: org.kevoree.modeling.KCallback<Float64Array>): void;
                    timesBetween(beginningOfSearch: number, endOfSearch: number, cb: org.kevoree.modeling.KCallback<Float64Array>): void;
                }
                class AbstractKObjectInfer extends org.kevoree.modeling.abs.AbstractKObject implements org.kevoree.modeling.KObjectInfer {
                    constructor(p_universe: number, p_time: number, p_uuid: number, p_metaClass: org.kevoree.modeling.meta.KMetaClass, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager, currentUniverse: number, currentTime: number);
                    private dependenciesResolver(dependencies);
                    genericTrain(dependencies: org.kevoree.modeling.KObject[], expectedOutputs: any[], callback: org.kevoree.modeling.KCallback<any>): void;
                    genericTrainAll(p_dependencies: org.kevoree.modeling.KObject[][], p_outputs: any[][], callback: org.kevoree.modeling.KCallback<any>): void;
                    genericInfer(dependencies: org.kevoree.modeling.KObject[], callback: org.kevoree.modeling.KCallback<any[]>): void;
                    genericInferAll(p_dependencies: org.kevoree.modeling.KObject[][], callback: org.kevoree.modeling.KCallback<any[][]>): void;
                    resetLearning(): void;
                    private internalConvertOutput(output, metaOutput);
                    private internalReverseOutput(inferred, metaOutput);
                    private math_ceil(toCeilValue);
                }
                class AbstractKUniverse<A extends org.kevoree.modeling.KView, B extends org.kevoree.modeling.KUniverse<any, any>> implements org.kevoree.modeling.KUniverse<A, B> {
                    _universe: number;
                    _manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager;
                    constructor(p_key: number, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager);
                    key(): number;
                    time(timePoint: number): A;
                    internal_create(timePoint: number): A;
                    equals(obj: any): boolean;
                    diverge(): B;
                    lookupAllTimes(uuid: number, times: Float64Array, cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                    createListener(): org.kevoree.modeling.KListener;
                }
                class AbstractKView implements org.kevoree.modeling.KView {
                    _time: number;
                    _universe: number;
                    _manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager;
                    constructor(p_universe: number, _time: number, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager);
                    now(): number;
                    universe(): number;
                    setRoot(elem: org.kevoree.modeling.KObject, cb: org.kevoree.modeling.KCallback<any>): void;
                    getRoot(cb: org.kevoree.modeling.KCallback<any>): void;
                    select(query: string, cb: org.kevoree.modeling.KCallback<any[]>): void;
                    lookup(kid: number, cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                    lookupAll(keys: Float64Array, cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                    create(clazz: org.kevoree.modeling.meta.KMetaClass): org.kevoree.modeling.KObject;
                    createByName(metaClassName: string): org.kevoree.modeling.KObject;
                    json(): org.kevoree.modeling.format.KModelFormat;
                    equals(obj: any): boolean;
                }
            }
            module cdn {
                interface KContentDeliveryDriver {
                    get(keys: Float64Array, callback: org.kevoree.modeling.KCallback<string[]>): void;
                    atomicGetIncrement(key: Float64Array, cb: org.kevoree.modeling.KCallback<number>): void;
                    put(keys: Float64Array, values: string[], error: org.kevoree.modeling.KCallback<Error>, excludeListener: number): void;
                    remove(keys: Float64Array, error: org.kevoree.modeling.KCallback<Error>): void;
                    connect(callback: org.kevoree.modeling.KCallback<Error>): void;
                    close(callback: org.kevoree.modeling.KCallback<Error>): void;
                    addUpdateListener(interceptor: org.kevoree.modeling.cdn.KContentUpdateListener): number;
                    removeUpdateListener(id: number): void;
                    peers(): string[];
                    sendToPeer(peer: string, message: org.kevoree.modeling.message.KMessage, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.message.KMessage>): void;
                }
                interface KContentUpdateListener {
                    onKeysUpdate(updatedKeys: Float64Array): void;
                    onOperationCall(operationCallMessage: org.kevoree.modeling.message.KMessage): void;
                }
                module impl {
                    class MemoryContentDeliveryDriver implements org.kevoree.modeling.cdn.KContentDeliveryDriver {
                        private backend;
                        private additionalInterceptors;
                        atomicGetIncrement(key: Float64Array, cb: org.kevoree.modeling.KCallback<number>): void;
                        get(keys: Float64Array, callback: org.kevoree.modeling.KCallback<string[]>): void;
                        put(p_keys: Float64Array, p_values: string[], p_callback: org.kevoree.modeling.KCallback<Error>, excludeListener: number): void;
                        remove(p_keys: Float64Array, callback: org.kevoree.modeling.KCallback<Error>): void;
                        connect(callback: org.kevoree.modeling.KCallback<Error>): void;
                        close(callback: org.kevoree.modeling.KCallback<Error>): void;
                        private nextListenerID();
                        addUpdateListener(p_interceptor: org.kevoree.modeling.cdn.KContentUpdateListener): number;
                        removeUpdateListener(id: number): void;
                        peers(): string[];
                        sendToPeer(peer: string, message: org.kevoree.modeling.message.KMessage, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.message.KMessage>): void;
                    }
                }
            }
            module defer {
                interface KDefer {
                    waitResult(): org.kevoree.modeling.KCallback<any>;
                    then(cb: org.kevoree.modeling.KCallback<any[]>): void;
                }
                module impl {
                    class Defer implements org.kevoree.modeling.defer.KDefer {
                        private _end;
                        private _nbExpectedResult;
                        private _nbRecResult;
                        private _results;
                        private _resultSize;
                        waitResult(): org.kevoree.modeling.KCallback<any>;
                        then(cb: org.kevoree.modeling.KCallback<any[]>): void;
                        private informEndOrRegister(p_indexToInsert, p_result, p_end);
                    }
                }
            }
            module extrapolation {
                interface Extrapolation {
                    extrapolate(current: org.kevoree.modeling.KObject, attribute: org.kevoree.modeling.meta.KMetaAttribute, dataManager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): any;
                    mutate(current: org.kevoree.modeling.KObject, attribute: org.kevoree.modeling.meta.KMetaAttribute, payload: any, dataManager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                }
                module impl {
                    class DiscreteExtrapolation implements org.kevoree.modeling.extrapolation.Extrapolation {
                        private static INSTANCE;
                        static instance(): org.kevoree.modeling.extrapolation.Extrapolation;
                        extrapolate(current: org.kevoree.modeling.KObject, attribute: org.kevoree.modeling.meta.KMetaAttribute, dataManager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): any;
                        mutate(current: org.kevoree.modeling.KObject, attribute: org.kevoree.modeling.meta.KMetaAttribute, payload: any, dataManager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        private convert(attribute, payload);
                    }
                    class DoublePolynomialExtrapolation implements org.kevoree.modeling.extrapolation.Extrapolation {
                        private static _TIMERR;
                        private static _maxDegree;
                        private static _maxTimeDegree;
                        private static TIMEDEG;
                        private static NUMSAMPLES;
                        private static POLYDEG;
                        private static STEP;
                        private static TIMEWEIGHT;
                        private static INSTANCE;
                        extrapolate(current: org.kevoree.modeling.KObject, attribute: org.kevoree.modeling.meta.KMetaAttribute, dataManager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): any;
                        private getPolyWeightIndex(segment, meta, index);
                        private getTime(num, segment, meta, index);
                        private getLastTime(segment, meta, index);
                        private extrapolateValue(segment, meta, index, time, timeOrigin);
                        private maxErr(precision, degree);
                        insert(time: number, value: number, timeOrigin: number, raw: org.kevoree.modeling.memory.chunk.KObjectChunk, index: number, precision: number, metaClass: org.kevoree.modeling.meta.KMetaClass): boolean;
                        private tempError(computedWeights, times, values);
                        private internal_extrapolate(t, raw, index, metaClass);
                        private initial_feed(time, value, raw, index, metaClass);
                        mutate(current: org.kevoree.modeling.KObject, attribute: org.kevoree.modeling.meta.KMetaAttribute, payload: any, dataManager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        private getLastTimeLong(raw, kMetaClass, index);
                        private castNumber(payload);
                        static instance(): org.kevoree.modeling.extrapolation.Extrapolation;
                    }
                    class PolynomialExtrapolation implements org.kevoree.modeling.extrapolation.Extrapolation {
                        private static _maxDegree;
                        private static DEGREE;
                        private static NUMSAMPLES;
                        private static STEP;
                        private static LASTTIME;
                        private static WEIGHTS;
                        private static INSTANCE;
                        extrapolate(current: org.kevoree.modeling.KObject, attribute: org.kevoree.modeling.meta.KMetaAttribute, dataManager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): any;
                        private extrapolateValue(segment, meta, index, time, timeOrigin);
                        private maxErr(precision, degree);
                        insert(time: number, value: number, timeOrigin: number, raw: org.kevoree.modeling.memory.chunk.KObjectChunk, index: number, precision: number, metaClass: org.kevoree.modeling.meta.KMetaClass): boolean;
                        private tempError(computedWeights, times, values);
                        private internal_extrapolate(t, raw, index, metaClass);
                        private initial_feed(time, value, raw, index, metaClass);
                        mutate(current: org.kevoree.modeling.KObject, attribute: org.kevoree.modeling.meta.KMetaAttribute, payload: any, dataManager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        private castNumber(payload);
                        static instance(): org.kevoree.modeling.extrapolation.Extrapolation;
                    }
                }
            }
            module format {
                interface KModelFormat {
                    save(model: org.kevoree.modeling.KObject, cb: org.kevoree.modeling.KCallback<string>): void;
                    saveRoot(cb: org.kevoree.modeling.KCallback<string>): void;
                    load(payload: string, cb: org.kevoree.modeling.KCallback<any>): void;
                }
                module json {
                    class JsonFormat implements org.kevoree.modeling.format.KModelFormat {
                        static KEY_META: string;
                        static KEY_UUID: string;
                        static KEY_ROOT: string;
                        private _manager;
                        private _universe;
                        private _time;
                        private static NULL_PARAM_MSG;
                        constructor(p_universe: number, p_time: number, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager);
                        save(model: org.kevoree.modeling.KObject, cb: org.kevoree.modeling.KCallback<string>): void;
                        saveRoot(cb: org.kevoree.modeling.KCallback<string>): void;
                        load(payload: string, cb: org.kevoree.modeling.KCallback<any>): void;
                    }
                    class JsonModelLoader {
                        static load(manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager, universe: number, time: number, payload: string, callback: org.kevoree.modeling.KCallback<Error>): void;
                        private static loadObj(p_param, manager, universe, time, p_mappedKeys, p_rootElem);
                        private static transposeArr(plainRawSet, p_mappedKeys);
                        private static sizeOfList(plainRawSet);
                        private static getString(plainRawSet, l);
                    }
                    class JsonModelSerializer {
                        static serialize(model: org.kevoree.modeling.KObject, callback: org.kevoree.modeling.KCallback<string>): void;
                        static printJSON(elem: org.kevoree.modeling.KObject, builder: java.lang.StringBuilder, isRoot: boolean): void;
                    }
                    class JsonObjectReader {
                        private readObject;
                        parseObject(payload: string): void;
                        get(name: string): any;
                        getAsStringArray(name: string): string[];
                        keys(): string[];
                    }
                    class JsonRaw {
                        static encode(raw: org.kevoree.modeling.memory.chunk.KObjectChunk, uuid: number, p_metaClass: org.kevoree.modeling.meta.KMetaClass, isRoot: boolean): string;
                    }
                    class JsonString {
                        private static ESCAPE_CHAR;
                        static encodeBuffer(buffer: java.lang.StringBuilder, chain: string): void;
                        static encode(p_chain: string): string;
                        static unescape(p_src: string): string;
                    }
                }
                module xmi {
                }
            }
            module infer {
                interface KInferAlg {
                    train(trainingSet: org.kevoree.modeling.util.maths.structure.KArray2D, expectedResultSet: org.kevoree.modeling.util.maths.structure.KArray2D, currentInferObject: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                    infer(features: org.kevoree.modeling.util.maths.structure.KArray2D, currentInferObject: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.util.maths.structure.KArray2D;
                }
                class KInferAlgFactory {
                    static build(name: string): org.kevoree.modeling.infer.KInferAlg;
                }
                module impl {
                    class BinaryPerceptronAlg implements org.kevoree.modeling.infer.KInferAlg {
                        private iterations;
                        private alpha;
                        private rand;
                        train(trainingSet: org.kevoree.modeling.util.maths.structure.KArray2D, expectedResultSet: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        private addUp(features, row, state);
                        private sigmoid(features, row, state);
                        infer(features: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.util.maths.structure.KArray2D;
                    }
                    class EmptyInfer implements org.kevoree.modeling.infer.KInferAlg {
                        train(trainingSet: org.kevoree.modeling.util.maths.structure.KArray2D, expectedResultSet: org.kevoree.modeling.util.maths.structure.KArray2D, currentInferObject: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        infer(features: org.kevoree.modeling.util.maths.structure.KArray2D, currentInferObject: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.util.maths.structure.KArray2D;
                    }
                    class GaussianAnomalyDetectionAlg implements org.kevoree.modeling.infer.KInferAlg {
                        private _alpha;
                        private static MIN;
                        private static MAX;
                        private static SUM;
                        private static SUMSQUARE;
                        private static NUMOFFIELDS;
                        getProba(features: org.kevoree.modeling.util.maths.structure.KArray2D, row: number, state: org.kevoree.modeling.util.maths.structure.KArray1D, meta: org.kevoree.modeling.meta.KMetaDependencies): number;
                        getAvg(state: org.kevoree.modeling.util.maths.structure.KArray1D, meta: org.kevoree.modeling.meta.KMetaDependencies): Float64Array;
                        getVariance(state: org.kevoree.modeling.util.maths.structure.KArray1D, avg: Float64Array, meta: org.kevoree.modeling.meta.KMetaDependencies): Float64Array;
                        train(trainingSet: org.kevoree.modeling.util.maths.structure.KArray2D, expectedResultSet: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        infer(features: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.util.maths.structure.KArray2D;
                    }
                    class GaussianClassifierAlg implements org.kevoree.modeling.infer.KInferAlg {
                        private static MIN;
                        private static MAX;
                        private static SUM;
                        private static SUMSQUARE;
                        private static NUMOFFIELDS;
                        private getIndex(input, output, field, meta);
                        private getCounter(output, meta);
                        getAvg(output: number, state: org.kevoree.modeling.util.maths.structure.KArray1D, meta: org.kevoree.modeling.meta.KMetaDependencies): Float64Array;
                        getVariance(output: number, state: org.kevoree.modeling.util.maths.structure.KArray1D, avg: Float64Array, meta: org.kevoree.modeling.meta.KMetaDependencies): Float64Array;
                        train(trainingSet: org.kevoree.modeling.util.maths.structure.KArray2D, expectedResultSet: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        infer(features: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.util.maths.structure.KArray2D;
                        getProba(features: org.kevoree.modeling.util.maths.structure.KArray2D, row: number, output: number, state: org.kevoree.modeling.util.maths.structure.KArray1D, meta: org.kevoree.modeling.meta.KMetaDependencies): number;
                        getAllProba(features: Float64Array, state: org.kevoree.modeling.util.maths.structure.impl.Array1D, meta: org.kevoree.modeling.meta.KMetaDependencies, maxOutput: number): Float64Array;
                    }
                    class GaussianProfiler implements org.kevoree.modeling.infer.KInferAlg {
                        private static MIN;
                        private static MAX;
                        private static SUM;
                        private static SUMSQUARE;
                        private static NUMOFFIELDS;
                        maxTimeSlots: number;
                        private getIndex(input, output, field, meta);
                        private getCounter(output, meta);
                        getAvg(output: number, state: org.kevoree.modeling.util.maths.structure.impl.Array1D, meta: org.kevoree.modeling.meta.KMetaDependencies): Float64Array;
                        getVariance(output: number, state: org.kevoree.modeling.util.maths.structure.impl.Array1D, avg: Float64Array, meta: org.kevoree.modeling.meta.KMetaDependencies): Float64Array;
                        train(trainingSet: org.kevoree.modeling.util.maths.structure.KArray2D, expectedResult: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        infer(features: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.util.maths.structure.KArray2D;
                        getProba(features: Float64Array, output: number, state: org.kevoree.modeling.util.maths.structure.impl.Array1D, meta: org.kevoree.modeling.meta.KMetaDependencies): number;
                    }
                    class KMeanClusterAlg implements org.kevoree.modeling.infer.KInferAlg {
                        private k;
                        private iterations;
                        train(trainingSet: org.kevoree.modeling.util.maths.structure.KArray2D, expectedResultSet: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        private classify(features, row, state);
                        infer(features: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.util.maths.structure.KArray2D;
                    }
                    class LinearRegressionAlg implements org.kevoree.modeling.infer.KInferAlg {
                        private alpha;
                        private gamma;
                        private iterations;
                        private static rand;
                        train(trainingSet: org.kevoree.modeling.util.maths.structure.KArray2D, expectedResultSet: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        private estimate(training, row, state);
                        infer(features: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.util.maths.structure.KArray2D;
                    }
                    class RecommendationAlg implements org.kevoree.modeling.infer.KInferAlg {
                        train(trainingSet: org.kevoree.modeling.util.maths.structure.KArray2D, expectedResultSet: org.kevoree.modeling.util.maths.structure.KArray2D, currentInferObject: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        infer(features: org.kevoree.modeling.util.maths.structure.KArray2D, currentInferObject: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.util.maths.structure.KArray2D;
                    }
                    class StatInferAlg implements org.kevoree.modeling.infer.KInferAlg {
                        private static MIN;
                        private static MAX;
                        private static SUM;
                        private static SUMSQuare;
                        private static NUMOFFIELDS;
                        train(trainingSet: org.kevoree.modeling.util.maths.structure.KArray2D, expectedResultSet: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        infer(features: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.util.maths.structure.KArray2D;
                        getAvgAll(ks: org.kevoree.modeling.memory.chunk.KObjectChunk, meta: org.kevoree.modeling.meta.KMetaDependencies): Float64Array;
                        getMinAll(ks: org.kevoree.modeling.memory.chunk.KObjectChunk, meta: org.kevoree.modeling.meta.KMetaDependencies): Float64Array;
                        getMaxAll(ks: org.kevoree.modeling.memory.chunk.KObjectChunk, meta: org.kevoree.modeling.meta.KMetaDependencies): Float64Array;
                        getVarianceAll(ks: org.kevoree.modeling.memory.chunk.KObjectChunk, meta: org.kevoree.modeling.meta.KMetaDependencies, avgs: Float64Array): Float64Array;
                        getAvg(featureNum: number, ks: org.kevoree.modeling.memory.chunk.KObjectChunk, meta: org.kevoree.modeling.meta.KMetaDependencies): number;
                        getMin(featureNum: number, ks: org.kevoree.modeling.memory.chunk.KObjectChunk, meta: org.kevoree.modeling.meta.KMetaDependencies): number;
                        getMax(featureNum: number, ks: org.kevoree.modeling.memory.chunk.KObjectChunk, meta: org.kevoree.modeling.meta.KMetaDependencies): number;
                        getVariance(featureNum: number, ks: org.kevoree.modeling.memory.chunk.KObjectChunk, meta: org.kevoree.modeling.meta.KMetaDependencies, avg: number): number;
                    }
                    class WinnowAlg implements org.kevoree.modeling.infer.KInferAlg {
                        private alpha;
                        private beta;
                        private iterations;
                        private rand;
                        train(trainingSet: org.kevoree.modeling.util.maths.structure.KArray2D, expectedResultSet: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): void;
                        private calculate(features, row, state);
                        infer(features: org.kevoree.modeling.util.maths.structure.KArray2D, origin: org.kevoree.modeling.KObject, manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.util.maths.structure.KArray2D;
                    }
                }
            }
            module memory {
                interface KChunk {
                    serialize(metaModel: org.kevoree.modeling.meta.KMetaModel): string;
                    init(payload: string, metaModel: org.kevoree.modeling.meta.KMetaModel, metaClassIndex: number): void;
                    counter(): number;
                    inc(): number;
                    dec(): number;
                    free(metaModel: org.kevoree.modeling.meta.KMetaModel): void;
                    type(): number;
                    space(): org.kevoree.modeling.memory.space.KChunkSpace;
                    getFlags(): number;
                    setFlags(bitsToEnable: number, bitsToDisable: number): void;
                    universe(): number;
                    time(): number;
                    obj(): number;
                    dependencies(): Float64Array;
                    addDependency(universe: number, time: number, uuid: number): void;
                }
                class KChunkFlags {
                    static DIRTY_BIT_INDEX: number;
                    static DIRTY_BIT: number;
                    static REMOVED_BIT_INDEX: number;
                    static REMOVED_BIT: number;
                }
                interface KOffHeapChunk extends org.kevoree.modeling.memory.KChunk {
                    memoryAddress(): number;
                    setMemoryAddress(address: number): void;
                }
                module chunk {
                    interface KIntMap<V> {
                        contains(key: number): boolean;
                        get(key: number): V;
                        put(key: number, value: V): void;
                        each(callback: org.kevoree.modeling.memory.chunk.KIntMapCallBack<V>): void;
                    }
                    interface KIntMapCallBack<V> {
                        (key: number, value: V): void;
                    }
                    interface KLongLongMap extends org.kevoree.modeling.memory.KChunk {
                        metaClassIndex(): number;
                        contains(key: number): boolean;
                        get(key: number): number;
                        put(key: number, value: number): void;
                        remove(key: number): void;
                        each(callback: org.kevoree.modeling.memory.chunk.KLongLongMapCallBack<any>): void;
                        size(): number;
                        clear(): void;
                    }
                    interface KLongLongMapCallBack<V> {
                        (key: number, value: number): void;
                    }
                    interface KLongLongTree extends org.kevoree.modeling.memory.chunk.KTree {
                        insert(key: number, value: number): void;
                        previousOrEqualValue(key: number): number;
                        lookupValue(key: number): number;
                    }
                    interface KLongMap<V> {
                        contains(key: number): boolean;
                        get(key: number): V;
                        put(key: number, value: V): void;
                        each(callback: org.kevoree.modeling.memory.chunk.KLongMapCallBack<V>): void;
                        size(): number;
                        clear(): void;
                    }
                    interface KLongMapCallBack<V> {
                        (key: number, value: V): void;
                    }
                    interface KLongTree extends org.kevoree.modeling.memory.chunk.KTree {
                        insertKey(key: number): void;
                        previousOrEqual(key: number): number;
                        lookup(key: number): number;
                        range(startKey: number, endKey: number, walker: org.kevoree.modeling.memory.chunk.KTreeWalker): void;
                    }
                    interface KObjectChunk extends org.kevoree.modeling.memory.KChunk {
                        clone(p_universe: number, p_time: number, p_obj: number, p_metaClass: org.kevoree.modeling.meta.KMetaModel): org.kevoree.modeling.memory.chunk.KObjectChunk;
                        metaClassIndex(): number;
                        toJSON(metaModel: org.kevoree.modeling.meta.KMetaModel): string;
                        setPrimitiveType(index: number, content: any, metaClass: org.kevoree.modeling.meta.KMetaClass): void;
                        getPrimitiveType(index: number, metaClass: org.kevoree.modeling.meta.KMetaClass): any;
                        getLongArray(index: number, metaClass: org.kevoree.modeling.meta.KMetaClass): Float64Array;
                        getLongArraySize(index: number, metaClass: org.kevoree.modeling.meta.KMetaClass): number;
                        getLongArrayElem(index: number, refIndex: number, metaClass: org.kevoree.modeling.meta.KMetaClass): number;
                        addLongToArray(index: number, newRef: number, metaClass: org.kevoree.modeling.meta.KMetaClass): boolean;
                        removeLongToArray(index: number, previousRef: number, metaClass: org.kevoree.modeling.meta.KMetaClass): boolean;
                        clearLongArray(index: number, metaClass: org.kevoree.modeling.meta.KMetaClass): void;
                        getDoubleArray(index: number, metaClass: org.kevoree.modeling.meta.KMetaClass): Float64Array;
                        getDoubleArraySize(index: number, metaClass: org.kevoree.modeling.meta.KMetaClass): number;
                        getDoubleArrayElem(index: number, arrayIndex: number, metaClass: org.kevoree.modeling.meta.KMetaClass): number;
                        setDoubleArrayElem(index: number, arrayIndex: number, valueToInsert: number, metaClass: org.kevoree.modeling.meta.KMetaClass): void;
                        extendDoubleArray(index: number, newSize: number, metaClass: org.kevoree.modeling.meta.KMetaClass): void;
                        clearDoubleArray(index: number, metaClass: org.kevoree.modeling.meta.KMetaClass): void;
                    }
                    interface KStringMap<V> {
                        contains(key: string): boolean;
                        get(key: string): V;
                        put(key: string, value: V): void;
                        each(callback: org.kevoree.modeling.memory.chunk.KStringMapCallBack<V>): void;
                        size(): number;
                        clear(): void;
                        remove(key: string): void;
                    }
                    interface KStringMapCallBack<V> {
                        (key: string, value: V): void;
                    }
                    interface KTree extends org.kevoree.modeling.memory.KChunk {
                        size(): number;
                    }
                    interface KTreeWalker {
                        (t: number): void;
                    }
                    module impl {
                        class AbstractArrayTree implements org.kevoree.modeling.memory.KChunk {
                            private static BLACK_LEFT;
                            private static BLACK_RIGHT;
                            private static RED_LEFT;
                            private static RED_RIGHT;
                            private static META_SIZE;
                            private static LOAD_FACTOR;
                            kvSize: number;
                            private _threshold;
                            private _root_index;
                            private _size;
                            private state;
                            private _space;
                            private _flags;
                            private _counter;
                            private _universe;
                            private _time;
                            private _obj;
                            constructor(p_universe: number, p_time: number, p_obj: number, p_space: org.kevoree.modeling.memory.space.KChunkSpace);
                            counter(): number;
                            inc(): number;
                            dec(): number;
                            universe(): number;
                            time(): number;
                            obj(): number;
                            getFlags(): number;
                            setFlags(bitsToEnable: number, bitsToDisable: number): void;
                            space(): org.kevoree.modeling.memory.space.KChunkSpace;
                            private allocate(capacity);
                            private reallocate(newCapacity);
                            size(): number;
                            key(p_currentIndex: number): number;
                            private setKey(p_currentIndex, p_paramIndex);
                            value(p_currentIndex: number): number;
                            private setValue(p_currentIndex, p_paramIndex);
                            private left(p_currentIndex);
                            private setLeft(p_currentIndex, p_paramIndex);
                            private right(p_currentIndex);
                            private setRight(p_currentIndex, p_paramIndex);
                            private parent(p_currentIndex);
                            private setParent(p_currentIndex, p_paramIndex);
                            private color(p_currentIndex);
                            private setColor(p_currentIndex, p_paramIndex);
                            private grandParent(p_currentIndex);
                            private sibling(p_currentIndex);
                            private uncle(p_currentIndex);
                            private previous(p_index);
                            private next(p_index);
                            lookup(p_key: number): number;
                            range(startKey: number, endKey: number, walker: org.kevoree.modeling.memory.chunk.KTreeWalker): void;
                            internal_previousOrEqual_index(p_key: number): number;
                            private rotateLeft(n);
                            private rotateRight(n);
                            private replaceNode(oldn, newn);
                            private insertCase1(n);
                            private insertCase2(n);
                            private insertCase3(n);
                            private insertCase4(n_n);
                            private insertCase5(n);
                            serialize(metaModel: org.kevoree.modeling.meta.KMetaModel): string;
                            init(payload: string, metaModel: org.kevoree.modeling.meta.KMetaModel, metaClassIndex: number): void;
                            free(p_metaModel: org.kevoree.modeling.meta.KMetaModel): void;
                            internal_insert(p_key: number, p_value: number): void;
                            internal_lookup_value(p_key: number): number;
                            private internal_set_dirty();
                            type(): number;
                            dependencies(): Float64Array;
                            addDependency(universe: number, time: number, uuid: number): void;
                        }
                        module AbstractArrayTree {
                            class InternalState {
                                _back_meta: Int32Array;
                                _back_kv: Float64Array;
                                _back_colors: boolean[];
                                constructor(_back_meta: Int32Array, _back_kv: Float64Array, _back_colors: boolean[]);
                            }
                        }
                        class ArrayIntMap<V> implements org.kevoree.modeling.memory.chunk.KIntMap<V> {
                            constructor(initalCapacity: number, loadFactor: number);
                            clear(): void;
                            get(key: number): V;
                            put(key: number, pval: V): V;
                            contains(key: number): boolean;
                            remove(key: number): V;
                            size(): number;
                            each(callback: (p: number, p1: V) => void): void;
                        }
                        class ArrayLongLongMap implements org.kevoree.modeling.memory.chunk.KLongLongMap {
                            elementCount: number;
                            droppedCount: number;
                            state: org.kevoree.modeling.memory.chunk.impl.ArrayLongLongMap.InternalState;
                            threshold: number;
                            private initialCapacity;
                            private static loadFactor;
                            private _flags;
                            private _counter;
                            private _space;
                            private _universe;
                            private _time;
                            private _obj;
                            private _metaClassIndex;
                            constructor(p_universe: number, p_time: number, p_obj: number, p_space: org.kevoree.modeling.memory.space.KChunkSpace);
                            counter(): number;
                            inc(): number;
                            dec(): number;
                            clear(): void;
                            rehashCapacity(capacity: number): void;
                            each(callback: org.kevoree.modeling.memory.chunk.KLongLongMapCallBack<any>): void;
                            metaClassIndex(): number;
                            contains(key: number): boolean;
                            get(key: number): number;
                            put(key: number, value: number): void;
                            findNonNullKeyEntry(key: number, index: number): number;
                            remove(key: number): void;
                            size(): number;
                            init(payload: string, metaModel: org.kevoree.modeling.meta.KMetaModel, metaClassIndex: number): void;
                            serialize(metaModel: org.kevoree.modeling.meta.KMetaModel): string;
                            free(metaModel: org.kevoree.modeling.meta.KMetaModel): void;
                            type(): number;
                            space(): org.kevoree.modeling.memory.space.KChunkSpace;
                            private internal_set_dirty();
                            getFlags(): number;
                            setFlags(bitsToEnable: number, bitsToDisable: number): void;
                            universe(): number;
                            time(): number;
                            obj(): number;
                            dependencies(): Float64Array;
                            addDependency(universe: number, time: number, uuid: number): void;
                        }
                        module ArrayLongLongMap {
                            class InternalState {
                                elementDataSize: number;
                                elementKV: Float64Array;
                                elementNext: Int32Array;
                                elementHash: Int32Array;
                                constructor(elementDataSize: number, elementKV: Float64Array, elementNext: Int32Array, elementHash: Int32Array);
                            }
                        }
                        class ArrayLongLongTree extends org.kevoree.modeling.memory.chunk.impl.AbstractArrayTree implements org.kevoree.modeling.memory.chunk.KLongLongTree {
                            constructor(p_universe: number, p_time: number, p_obj: number, p_space: org.kevoree.modeling.memory.space.KChunkSpace);
                            previousOrEqualValue(p_key: number): number;
                            lookupValue(p_key: number): number;
                            insert(p_key: number, p_value: number): void;
                            type(): number;
                        }
                        class ArrayLongMap<V> implements org.kevoree.modeling.memory.chunk.KLongMap<V> {
                            constructor(initalCapacity: number, loadFactor: number);
                            clear(): void;
                            get(key: number): V;
                            put(key: number, pval: V): V;
                            contains(key: number): boolean;
                            remove(key: number): V;
                            size(): number;
                            each(callback: (p: number, p1: V) => void): void;
                        }
                        class ArrayLongTree extends org.kevoree.modeling.memory.chunk.impl.AbstractArrayTree implements org.kevoree.modeling.memory.chunk.KLongTree {
                            constructor(p_universe: number, p_time: number, p_obj: number, p_space: org.kevoree.modeling.memory.space.KChunkSpace);
                            previousOrEqual(key: number): number;
                            insertKey(p_key: number): void;
                            type(): number;
                        }
                        class ArrayStringMap<V> implements org.kevoree.modeling.memory.chunk.KStringMap<V> {
                            constructor(initalCapacity: number, loadFactor: number);
                            clear(): void;
                            get(key: string): V;
                            put(key: string, pval: V): V;
                            contains(key: string): boolean;
                            remove(key: string): V;
                            size(): number;
                            each(callback: (p: string, p1: V) => void): void;
                        }
                        class HeapObjectChunk implements org.kevoree.modeling.memory.chunk.KObjectChunk {
                            private _space;
                            private _flags;
                            private _counter;
                            private _dependencies;
                            private _universe;
                            private _time;
                            private _obj;
                            private raw;
                            private _metaClassIndex;
                            constructor(p_universe: number, p_time: number, p_obj: number, p_space: org.kevoree.modeling.memory.space.KChunkSpace);
                            space(): org.kevoree.modeling.memory.space.KChunkSpace;
                            metaClassIndex(): number;
                            serialize(metaModel: org.kevoree.modeling.meta.KMetaModel): string;
                            private loadObject(metaAttribute, p_payload, p_start, p_end);
                            init(payload: string, metaModel: org.kevoree.modeling.meta.KMetaModel, metaClassIndex: number): void;
                            counter(): number;
                            inc(): number;
                            dec(): number;
                            free(metaModel: org.kevoree.modeling.meta.KMetaModel): void;
                            type(): number;
                            getPrimitiveType(index: number, p_metaClass: org.kevoree.modeling.meta.KMetaClass): any;
                            getLongArraySize(index: number, metaClass: org.kevoree.modeling.meta.KMetaClass): number;
                            getLongArrayElem(index: number, refIndex: number, metaClass: org.kevoree.modeling.meta.KMetaClass): number;
                            getLongArray(index: number, p_metaClass: org.kevoree.modeling.meta.KMetaClass): Float64Array;
                            addLongToArray(index: number, newRef: number, metaClass: org.kevoree.modeling.meta.KMetaClass): boolean;
                            removeLongToArray(index: number, refToRemove: number, metaClass: org.kevoree.modeling.meta.KMetaClass): boolean;
                            clearLongArray(index: number, metaClass: org.kevoree.modeling.meta.KMetaClass): void;
                            getDoubleArray(index: number, metaClass: org.kevoree.modeling.meta.KMetaClass): Float64Array;
                            getDoubleArraySize(index: number, metaClass: org.kevoree.modeling.meta.KMetaClass): number;
                            getDoubleArrayElem(index: number, arrayIndex: number, metaClass: org.kevoree.modeling.meta.KMetaClass): number;
                            setDoubleArrayElem(index: number, arrayIndex: number, valueToInsert: number, metaClass: org.kevoree.modeling.meta.KMetaClass): void;
                            extendDoubleArray(index: number, newSize: number, metaClass: org.kevoree.modeling.meta.KMetaClass): void;
                            clearDoubleArray(index: number, metaClass: org.kevoree.modeling.meta.KMetaClass): void;
                            setPrimitiveType(index: number, content: any, p_metaClass: org.kevoree.modeling.meta.KMetaClass): void;
                            clone(p_universe: number, p_time: number, p_obj: number, p_metaClass: org.kevoree.modeling.meta.KMetaModel): org.kevoree.modeling.memory.chunk.KObjectChunk;
                            toJSON(metaModel: org.kevoree.modeling.meta.KMetaModel): string;
                            private internal_set_dirty();
                            getFlags(): number;
                            setFlags(bitsToEnable: number, bitsToDisable: number): void;
                            universe(): number;
                            time(): number;
                            obj(): number;
                            dependencies(): Float64Array;
                            addDependency(universe: number, time: number, uuid: number): void;
                        }
                    }
                }
                module manager {
                    class DataManagerBuilder {
                        private _driver;
                        private _scheduler;
                        private _strategy;
                        private _blas;
                        driver(): org.kevoree.modeling.cdn.KContentDeliveryDriver;
                        blas(): org.kevoree.modeling.util.maths.structure.blas.KBlas;
                        scheduler(): org.kevoree.modeling.scheduler.KScheduler;
                        strategy(): org.kevoree.modeling.memory.strategy.KMemoryStrategy;
                        static create(): org.kevoree.modeling.memory.manager.DataManagerBuilder;
                        withContentDeliveryDriver(p_driver: org.kevoree.modeling.cdn.KContentDeliveryDriver): org.kevoree.modeling.memory.manager.DataManagerBuilder;
                        withScheduler(p_scheduler: org.kevoree.modeling.scheduler.KScheduler): org.kevoree.modeling.memory.manager.DataManagerBuilder;
                        withMemoryStrategy(p_strategy: org.kevoree.modeling.memory.strategy.KMemoryStrategy): org.kevoree.modeling.memory.manager.DataManagerBuilder;
                        withBlas(p_blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): org.kevoree.modeling.memory.manager.DataManagerBuilder;
                        build(): org.kevoree.modeling.memory.manager.internal.KInternalDataManager;
                        static buildDefault(): org.kevoree.modeling.memory.manager.internal.KInternalDataManager;
                    }
                    interface KDataManager {
                        lookup(universe: number, time: number, uuid: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                        lookupAllObjects(universe: number, time: number, uuids: Float64Array, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                        lookupAllTimes(universe: number, times: Float64Array, uuid: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                        createPreparedLookup(size: number): org.kevoree.modeling.KPreparedLookup;
                        lookupPrepared(prepared: org.kevoree.modeling.KPreparedLookup, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                        save(callback: org.kevoree.modeling.KCallback<Error>): void;
                        getRoot(universe: number, time: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                        setRoot(newRoot: org.kevoree.modeling.KObject, callback: org.kevoree.modeling.KCallback<Error>): void;
                        model(): org.kevoree.modeling.KModel<any>;
                        connect(callback: org.kevoree.modeling.KCallback<Error>): void;
                        close(callback: org.kevoree.modeling.KCallback<Error>): void;
                        blas(): org.kevoree.modeling.util.maths.structure.blas.KBlas;
                    }
                    module impl {
                        class DataManager implements org.kevoree.modeling.memory.manager.KDataManager, org.kevoree.modeling.memory.manager.internal.KInternalDataManager {
                            private static UNIVERSE_NOT_CONNECTED_ERROR;
                            private _operationManager;
                            private _db;
                            private _scheduler;
                            private _listenerManager;
                            private _modelKeyCalculator;
                            private _resolver;
                            private _space;
                            private _spaceManager;
                            private _blas;
                            private _objectKeyCalculator;
                            private _universeKeyCalculator;
                            private isConnected;
                            private _prefix;
                            private _model;
                            private static UNIVERSE_INDEX;
                            private static OBJ_INDEX;
                            private static GLO_TREE_INDEX;
                            private static zeroPrefix;
                            private currentCdnListener;
                            private static PREFIX_TO_SAVE_SIZE;
                            private static KEY_SIZE;
                            setModel(p_model: org.kevoree.modeling.KModel<any>): void;
                            constructor(p_cdn: org.kevoree.modeling.cdn.KContentDeliveryDriver, p_scheduler: org.kevoree.modeling.scheduler.KScheduler, p_factory: org.kevoree.modeling.memory.strategy.KMemoryStrategy, p_blas: org.kevoree.modeling.util.maths.structure.blas.KBlas);
                            model(): org.kevoree.modeling.KModel<any>;
                            blas(): org.kevoree.modeling.util.maths.structure.blas.KBlas;
                            nextUniverseKey(): number;
                            nextObjectKey(): number;
                            nextModelKey(): number;
                            initUniverse(p_universe: number, p_parent: number): void;
                            save(callback: org.kevoree.modeling.KCallback<Error>): void;
                            initKObject(obj: org.kevoree.modeling.KObject): void;
                            preciseChunk(universe: number, time: number, uuid: number, metaClass: org.kevoree.modeling.meta.KMetaClass, previousResolution: java.util.concurrent.atomic.AtomicReference<Float64Array>): org.kevoree.modeling.memory.chunk.KObjectChunk;
                            closestChunk(universe: number, time: number, uuid: number, metaClass: org.kevoree.modeling.meta.KMetaClass, previousResolution: java.util.concurrent.atomic.AtomicReference<Float64Array>): org.kevoree.modeling.memory.chunk.KObjectChunk;
                            connect(connectCallback: org.kevoree.modeling.KCallback<Error>): void;
                            close(callback: org.kevoree.modeling.KCallback<Error>): void;
                            deleteUniverse(p_universe: org.kevoree.modeling.KUniverse<any, any>, callback: org.kevoree.modeling.KCallback<Error>): void;
                            lookup(universe: number, time: number, uuid: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                            lookupAllObjects(universe: number, time: number, uuids: Float64Array, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                            lookupAllTimes(universe: number, times: Float64Array, uuid: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                            createPreparedLookup(p_size: number): org.kevoree.modeling.KPreparedLookup;
                            lookupPrepared(prepared: org.kevoree.modeling.KPreparedLookup, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                            getRoot(universe: number, time: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                            setRoot(newRoot: org.kevoree.modeling.KObject, callback: org.kevoree.modeling.KCallback<Error>): void;
                            cdn(): org.kevoree.modeling.cdn.KContentDeliveryDriver;
                            scheduler(): org.kevoree.modeling.scheduler.KScheduler;
                            private attachContentDeliveryDriver(p_dataBase);
                            operationManager(): org.kevoree.modeling.operation.KOperationManager;
                            createListener(p_universe: number): org.kevoree.modeling.KListener;
                            resolveTimes(currentUniverse: number, currentUuid: number, startTime: number, endTime: number, callback: org.kevoree.modeling.KCallback<Float64Array>): void;
                            spaceSize(): number;
                            printDebug(): void;
                        }
                        class HeapListener implements org.kevoree.modeling.KListener {
                            private _universe;
                            private _listenerManager;
                            private _id;
                            cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>;
                            listenerID(): number;
                            constructor(p_universe: number, p_listenerManager: org.kevoree.modeling.memory.manager.impl.ListenerManager, p_id: number);
                            universe(): number;
                            listenObjects(): Float64Array;
                            listen(obj: org.kevoree.modeling.KObject): void;
                            destroy(): void;
                            then(p_cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                        }
                        class KeyCalculator {
                            private _prefix;
                            private _currentIndex;
                            constructor(prefix: number, currentIndex: number);
                            nextKey(): number;
                            lastComputedIndex(): number;
                            prefix(): number;
                        }
                        class ListenerManager {
                            private _keyGen;
                            _listeners: org.kevoree.modeling.memory.chunk.impl.ArrayLongMap<org.kevoree.modeling.memory.manager.impl.HeapListener>;
                            _listener2Objects: org.kevoree.modeling.memory.chunk.impl.ArrayLongMap<Float64Array>;
                            _obj2Listener: org.kevoree.modeling.memory.chunk.impl.ArrayLongMap<Float64Array>;
                            constructor();
                            clear(): void;
                            createListener(p_universe: number): org.kevoree.modeling.KListener;
                            manageRegistration(listenerID: number, origin: org.kevoree.modeling.KObject): void;
                            isListened(obj: number): boolean;
                            dispatch(objects: org.kevoree.modeling.KObject[]): void;
                        }
                        class PreparedLookup implements org.kevoree.modeling.KPreparedLookup {
                            private _size;
                            private _flatStatement;
                            private _current;
                            constructor(p_size: number);
                            addLookupOperation(universe: number, time: number, uuid: number): void;
                            flatLookup(): Float64Array;
                        }
                    }
                    module internal {
                        interface KInternalDataManager extends org.kevoree.modeling.memory.manager.KDataManager {
                            createListener(universe: number): org.kevoree.modeling.KListener;
                            cdn(): org.kevoree.modeling.cdn.KContentDeliveryDriver;
                            scheduler(): org.kevoree.modeling.scheduler.KScheduler;
                            preciseChunk(universe: number, time: number, uuid: number, metaClass: org.kevoree.modeling.meta.KMetaClass, previousResolution: java.util.concurrent.atomic.AtomicReference<Float64Array>): org.kevoree.modeling.memory.chunk.KObjectChunk;
                            closestChunk(universe: number, time: number, uuid: number, metaClass: org.kevoree.modeling.meta.KMetaClass, previousResolution: java.util.concurrent.atomic.AtomicReference<Float64Array>): org.kevoree.modeling.memory.chunk.KObjectChunk;
                            initKObject(obj: org.kevoree.modeling.KObject): void;
                            initUniverse(universe: number, parent: number): void;
                            nextUniverseKey(): number;
                            nextObjectKey(): number;
                            nextModelKey(): number;
                            deleteUniverse(universe: org.kevoree.modeling.KUniverse<any, any>, callback: org.kevoree.modeling.KCallback<Error>): void;
                            operationManager(): org.kevoree.modeling.operation.KOperationManager;
                            setModel(model: org.kevoree.modeling.KModel<any>): void;
                            resolveTimes(currentUniverse: number, currentUuid: number, startTime: number, endTime: number, callback: org.kevoree.modeling.KCallback<Float64Array>): void;
                            spaceSize(): number;
                            printDebug(): void;
                        }
                    }
                }
                module resolver {
                    interface KResolver {
                        lookup(universe: number, time: number, uuid: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): org.kevoree.modeling.scheduler.KTask;
                        lookupAllObjects(universe: number, time: number, uuids: Float64Array, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): org.kevoree.modeling.scheduler.KTask;
                        lookupAllTimes(universe: number, times: Float64Array, uuid: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): org.kevoree.modeling.scheduler.KTask;
                        lookupPreciseKeys(keys: Float64Array, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): org.kevoree.modeling.scheduler.KTask;
                        lookupPrepared(preparedLookup: org.kevoree.modeling.KPreparedLookup, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): org.kevoree.modeling.scheduler.KTask;
                        preciseChunk(universe: number, time: number, uuid: number, metaClass: org.kevoree.modeling.meta.KMetaClass, previousResolution: java.util.concurrent.atomic.AtomicReference<Float64Array>): org.kevoree.modeling.memory.chunk.KObjectChunk;
                        closestChunk(universe: number, time: number, uuid: number, metaClass: org.kevoree.modeling.meta.KMetaClass, previousResolution: java.util.concurrent.atomic.AtomicReference<Float64Array>): org.kevoree.modeling.memory.chunk.KObjectChunk;
                        indexObject(obj: org.kevoree.modeling.KObject): void;
                        typeFromKey(universe: number, time: number, uuid: number): number;
                        resolveTimes(currentUniverse: number, currentUuid: number, startTime: number, endTime: number, callback: org.kevoree.modeling.KCallback<Float64Array>): void;
                        getRoot(universe: number, time: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                        setRoot(newRoot: org.kevoree.modeling.KObject, callback: org.kevoree.modeling.KCallback<Error>): void;
                        getRelatedKeysResultSize(): number;
                        getRelatedKeys(universe: number, time: number, uuid: number, result: Float64Array): void;
                    }
                    module impl {
                        class DistortedTimeResolver implements org.kevoree.modeling.memory.resolver.KResolver {
                            private static KEYS_SIZE;
                            private _spaceManager;
                            private _manager;
                            constructor(p_cache: org.kevoree.modeling.memory.space.KChunkSpaceManager, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager);
                            lookup(universe: number, time: number, uuid: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): org.kevoree.modeling.scheduler.KTask;
                            lookupAllObjects(universe: number, time: number, uuids: Float64Array, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): org.kevoree.modeling.scheduler.KTask;
                            lookupPreciseKeys(keys: Float64Array, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): org.kevoree.modeling.scheduler.KTask;
                            lookupPrepared(preparedLookup: org.kevoree.modeling.KPreparedLookup, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): org.kevoree.modeling.scheduler.KTask;
                            lookupAllTimes(universe: number, times: Float64Array, uuid: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): org.kevoree.modeling.scheduler.KTask;
                            preciseChunk(universe: number, time: number, uuid: number, metaClass: org.kevoree.modeling.meta.KMetaClass, previousResolution: java.util.concurrent.atomic.AtomicReference<Float64Array>): org.kevoree.modeling.memory.chunk.KObjectChunk;
                            closestChunk(universe: number, time: number, uuid: number, metaClass: org.kevoree.modeling.meta.KMetaClass, previousResolution: java.util.concurrent.atomic.AtomicReference<Float64Array>): org.kevoree.modeling.memory.chunk.KObjectChunk;
                            private internal_chunk(universe, requestedTime, uuid, useClosest, metaClass, previousResolution);
                            indexObject(obj: org.kevoree.modeling.KObject): void;
                            typeFromKey(universe: number, time: number, uuid: number): number;
                            getOrLoadAndMark(universe: number, time: number, uuid: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.memory.KChunk>): void;
                            getOrLoadAndMarkAll(keys: Float64Array, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.memory.KChunk[]>): void;
                            getRoot(universe: number, time: number, callback: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject>): void;
                            setRoot(newRoot: org.kevoree.modeling.KObject, callback: org.kevoree.modeling.KCallback<Error>): void;
                            resolveTimes(currentUniverse: number, currentUuid: number, startTime: number, endTime: number, callback: org.kevoree.modeling.KCallback<Float64Array>): void;
                            static resolve_universe(globalTree: org.kevoree.modeling.memory.chunk.KLongLongMap, objUniverseTree: org.kevoree.modeling.memory.chunk.KLongLongMap, timeToResolve: number, originUniverseId: number): number;
                            static universeSelectByRange(globalTree: org.kevoree.modeling.memory.chunk.KLongLongMap, objUniverseTree: org.kevoree.modeling.memory.chunk.KLongLongMap, rangeMin: number, rangeMax: number, originUniverseId: number): Float64Array;
                            private load(keys, callback);
                            getRelatedKeysResultSize(): number;
                            getRelatedKeys(universe: number, time: number, uuid: number, result: Float64Array): void;
                        }
                    }
                }
                module space {
                    interface KChunkIterator {
                        hasNext(): boolean;
                        next(): Float64Array;
                        size(): number;
                    }
                    interface KChunkSpace {
                        get(universe: number, time: number, obj: number): org.kevoree.modeling.memory.KChunk;
                        create(universe: number, time: number, obj: number, type: number): org.kevoree.modeling.memory.KChunk;
                        clone(previousElement: org.kevoree.modeling.memory.chunk.KObjectChunk, newUniverse: number, newTime: number, newObj: number, metaModel: org.kevoree.modeling.meta.KMetaModel): org.kevoree.modeling.memory.chunk.KObjectChunk;
                        clear(metaModel: org.kevoree.modeling.meta.KMetaModel): void;
                        free(metaModel: org.kevoree.modeling.meta.KMetaModel): void;
                        remove(universe: number, time: number, obj: number, metaModel: org.kevoree.modeling.meta.KMetaModel): void;
                        size(): number;
                        detachDirties(): org.kevoree.modeling.memory.space.KChunkIterator;
                        declareDirty(dirtyChunk: org.kevoree.modeling.memory.KChunk): void;
                        printDebug(p_metaModel: org.kevoree.modeling.meta.KMetaModel): void;
                    }
                    interface KChunkSpaceManager {
                        getAndMark(universe: number, time: number, obj: number): org.kevoree.modeling.memory.KChunk;
                        unmark(universe: number, time: number, obj: number): void;
                        createAndMark(universe: number, time: number, obj: number, type: number): org.kevoree.modeling.memory.KChunk;
                        unmarkMemoryElement(element: org.kevoree.modeling.memory.KChunk): void;
                        markMemoryElement(element: org.kevoree.modeling.memory.KChunk): void;
                        unmarkAllMemoryElements(elements: org.kevoree.modeling.memory.KChunk[]): void;
                        cloneAndMark(previous: org.kevoree.modeling.memory.chunk.KObjectChunk, newUniverse: number, newTime: number, obj: number, metaModel: org.kevoree.modeling.meta.KMetaModel): org.kevoree.modeling.memory.chunk.KObjectChunk;
                        clear(): void;
                        register(object: org.kevoree.modeling.KObject): void;
                        registerAll(objects: org.kevoree.modeling.KObject[]): void;
                        setResolver(resolver: org.kevoree.modeling.memory.resolver.KResolver): void;
                    }
                    class KChunkTypes {
                        static OBJECT_CHUNK: number;
                        static LONG_TREE: number;
                        static LONG_LONG_TREE: number;
                        static LONG_LONG_MAP: number;
                    }
                    module impl {
                        class AbstractCountingChunkSpaceManager implements org.kevoree.modeling.memory.space.KChunkSpaceManager {
                            _space: org.kevoree.modeling.memory.space.KChunkSpace;
                            _metaModel: org.kevoree.modeling.meta.KMetaModel;
                            constructor(p_storage: org.kevoree.modeling.memory.space.KChunkSpace);
                            getAndMark(universe: number, time: number, obj: number): org.kevoree.modeling.memory.KChunk;
                            unmark(universe: number, time: number, obj: number): void;
                            createAndMark(universe: number, time: number, obj: number, type: number): org.kevoree.modeling.memory.KChunk;
                            unmarkMemoryElement(element: org.kevoree.modeling.memory.KChunk): void;
                            markMemoryElement(element: org.kevoree.modeling.memory.KChunk): void;
                            unmarkAllMemoryElements(elements: org.kevoree.modeling.memory.KChunk[]): void;
                            private cleanDependenciesAndPotentiallyRemoveChunk(toRemoveChunk);
                            cloneAndMark(previous: org.kevoree.modeling.memory.chunk.KObjectChunk, newUniverse: number, newTime: number, obj: number, metaModel: org.kevoree.modeling.meta.KMetaModel): org.kevoree.modeling.memory.chunk.KObjectChunk;
                            clear(): void;
                            register(object: org.kevoree.modeling.KObject): void;
                            registerAll(objects: org.kevoree.modeling.KObject[]): void;
                            setResolver(resolver: org.kevoree.modeling.memory.resolver.KResolver): void;
                        }
                        class ChunkIterator implements org.kevoree.modeling.memory.space.KChunkIterator {
                            private _dirties;
                            private _origin;
                            private currentIndex;
                            private maxIndex;
                            private tempKeys;
                            constructor(p_dirties: Float64Array, p_origin: org.kevoree.modeling.memory.space.KChunkSpace);
                            hasNext(): boolean;
                            next(): Float64Array;
                            size(): number;
                        }
                        class HeapChunkSpace implements org.kevoree.modeling.memory.space.KChunkSpace {
                            private static LOAD_FACTOR;
                            private _state;
                            private _dirtyState;
                            constructor();
                            get(universe: number, time: number, obj: number): org.kevoree.modeling.memory.KChunk;
                            create(universe: number, time: number, obj: number, type: number): org.kevoree.modeling.memory.KChunk;
                            clone(previousElement: org.kevoree.modeling.memory.chunk.KObjectChunk, newUniverse: number, newTime: number, newObj: number, metaModel: org.kevoree.modeling.meta.KMetaModel): org.kevoree.modeling.memory.chunk.KObjectChunk;
                            private internal_createElement(p_universe, p_time, p_obj, type);
                            private internal_put(universe, time, p_obj, payload);
                            private complex_insert(universe, time, p_obj, payload, prehash, nextValueIndex);
                            private rehashCapacity(previousState);
                            findNonNullKeyEntry(universe: number, time: number, obj: number, index: number, internalState: org.kevoree.modeling.memory.space.impl.HeapChunkSpace.InternalState): number;
                            detachDirties(): org.kevoree.modeling.memory.space.KChunkIterator;
                            declareDirty(dirtyChunk: org.kevoree.modeling.memory.KChunk): void;
                            remove(universe: number, time: number, obj: number, p_metaModel: org.kevoree.modeling.meta.KMetaModel): void;
                            clear(metaModel: org.kevoree.modeling.meta.KMetaModel): void;
                            free(metaModel: org.kevoree.modeling.meta.KMetaModel): void;
                            printDebug(p_metaModel: org.kevoree.modeling.meta.KMetaModel): void;
                            size(): number;
                        }
                        module HeapChunkSpace {
                            class InternalState {
                                sparse: boolean;
                                elementDataSize: number;
                                elementK3: Float64Array;
                                elementNext: Int32Array;
                                elementHash: java.util.concurrent.atomic.AtomicIntegerArray;
                                values: org.kevoree.modeling.memory.KChunk[];
                                _elementCount: java.util.concurrent.atomic.AtomicInteger;
                                _valuesIndex: java.util.concurrent.atomic.AtomicInteger;
                                _threshold: number;
                                constructor(p_elementDataSize: number, p_elementKE: Float64Array, p_elementNext: Int32Array, p_elementHash: Int32Array, p_values: org.kevoree.modeling.memory.KChunk[]);
                            }
                            class InternalDirtyState {
                                _dirtyList: Float64Array;
                                _dirtyIndex: java.util.concurrent.atomic.AtomicInteger;
                                constructor();
                                declareDirty(universe: number, time: number, obj: number): void;
                                private reallocate(wantedIndex);
                            }
                        }
                        class NoopChunkSpaceManager implements org.kevoree.modeling.memory.space.KChunkSpaceManager {
                            private _space;
                            constructor(p_space: org.kevoree.modeling.memory.space.KChunkSpace);
                            getAndMark(universe: number, time: number, obj: number): org.kevoree.modeling.memory.KChunk;
                            unmark(universe: number, time: number, obj: number): void;
                            createAndMark(universe: number, time: number, obj: number, type: number): org.kevoree.modeling.memory.KChunk;
                            unmarkMemoryElement(element: org.kevoree.modeling.memory.KChunk): void;
                            markMemoryElement(element: org.kevoree.modeling.memory.KChunk): void;
                            unmarkAllMemoryElements(elements: org.kevoree.modeling.memory.KChunk[]): void;
                            cloneAndMark(previous: org.kevoree.modeling.memory.chunk.KObjectChunk, newUniverse: number, newTime: number, obj: number, metaModel: org.kevoree.modeling.meta.KMetaModel): org.kevoree.modeling.memory.chunk.KObjectChunk;
                            clear(): void;
                            register(object: org.kevoree.modeling.KObject): void;
                            registerAll(objects: org.kevoree.modeling.KObject[]): void;
                            setResolver(resolver: org.kevoree.modeling.memory.resolver.KResolver): void;
                        }
                    }
                }
                module strategy {
                    interface KMemoryStrategy {
                        newSpace(): org.kevoree.modeling.memory.space.KChunkSpace;
                        newSpaceManager(space: org.kevoree.modeling.memory.space.KChunkSpace, scheduler: org.kevoree.modeling.scheduler.KScheduler): org.kevoree.modeling.memory.space.KChunkSpaceManager;
                    }
                    module impl {
                        class HeapMemoryStrategy implements org.kevoree.modeling.memory.strategy.KMemoryStrategy {
                            newSpace(): org.kevoree.modeling.memory.space.KChunkSpace;
                            newSpaceManager(p_space: org.kevoree.modeling.memory.space.KChunkSpace, p_scheduler: org.kevoree.modeling.scheduler.KScheduler): org.kevoree.modeling.memory.space.KChunkSpaceManager;
                        }
                    }
                }
            }
            module message {
                interface KMessage {
                    id(): number;
                    setID(val: number): void;
                    type(): number;
                    setType(val: number): void;
                    operationName(): string;
                    setOperationName(val: string): void;
                    className(): string;
                    setClassName(val: string): void;
                    keys(): Float64Array;
                    setKeys(val: Float64Array): void;
                    values(): string[];
                    setValues(val: string[]): void;
                    values2(): string[];
                    setValues2(val: string[]): void;
                    peer(): string;
                    setPeer(val: string): void;
                    save(): string;
                }
                module impl {
                    class Message implements org.kevoree.modeling.message.KMessage {
                        private static TYPE_INDEX;
                        private static ID_INDEX;
                        private static OPERATION_INDEX;
                        private static CLASS_INDEX;
                        private static PEER_INDEX;
                        private static KEYS_INDEX;
                        private static VALUES_INDEX;
                        private static VALUES2_INDEX;
                        private static KEYS_NAME;
                        static EVENTS_TYPE: number;
                        static GET_REQ_TYPE: number;
                        static GET_RES_TYPE: number;
                        static PUT_REQ_TYPE: number;
                        static PUT_RES_TYPE: number;
                        static OPERATION_CALL_TYPE: number;
                        static OPERATION_RESULT_TYPE: number;
                        static ATOMIC_GET_INC_REQUEST_TYPE: number;
                        static ATOMIC_GET_INC_RESULT_TYPE: number;
                        static OPERATION_MAPPING: number;
                        private static NB_ELEM;
                        private internal;
                        id(): number;
                        setID(val: number): void;
                        type(): number;
                        setType(val: number): void;
                        operationName(): string;
                        setOperationName(val: string): void;
                        className(): string;
                        setClassName(val: string): void;
                        keys(): Float64Array;
                        setKeys(val: Float64Array): void;
                        values(): string[];
                        setValues(val: string[]): void;
                        values2(): string[];
                        setValues2(val: string[]): void;
                        peer(): string;
                        setPeer(val: string): void;
                        save(): string;
                        static load(payload: string): org.kevoree.modeling.message.KMessage;
                    }
                }
            }
            module meta {
                interface KLiteral extends org.kevoree.modeling.meta.KMeta {
                }
                interface KMeta {
                    index(): number;
                    metaName(): string;
                    metaType(): org.kevoree.modeling.meta.MetaType;
                }
                interface KMetaAttribute extends org.kevoree.modeling.meta.KMeta {
                    key(): boolean;
                    attributeTypeId(): number;
                    strategy(): org.kevoree.modeling.extrapolation.Extrapolation;
                    precision(): number;
                    setExtrapolation(extrapolation: org.kevoree.modeling.extrapolation.Extrapolation): void;
                    setPrecision(precision: number): void;
                }
                interface KMetaClass extends org.kevoree.modeling.meta.KMeta {
                    metaElements(): org.kevoree.modeling.meta.KMeta[];
                    meta(index: number): org.kevoree.modeling.meta.KMeta;
                    metaByName(name: string): org.kevoree.modeling.meta.KMeta;
                    metaParents(): Int32Array;
                    attribute(name: string): org.kevoree.modeling.meta.KMetaAttribute;
                    reference(name: string): org.kevoree.modeling.meta.KMetaRelation;
                    operation(name: string): org.kevoree.modeling.meta.KMetaOperation;
                    addAttribute(attributeName: string, p_type: org.kevoree.modeling.KType): org.kevoree.modeling.meta.KMetaAttribute;
                    addRelation(relationName: string, metaClass: org.kevoree.modeling.meta.KMetaClass, oppositeName: string): org.kevoree.modeling.meta.KMetaRelation;
                    addDependency(dependencyName: string, referredMetaClassIndex: number): org.kevoree.modeling.meta.KMetaDependency;
                    addInput(name: string, extractor: string): org.kevoree.modeling.meta.KMetaInferInput;
                    addOutput(name: string, metaClass: org.kevoree.modeling.KType): org.kevoree.modeling.meta.KMetaInferOutput;
                    addOperation(operationName: string): org.kevoree.modeling.meta.KMetaOperation;
                    inferAlg(): org.kevoree.modeling.infer.KInferAlg;
                    dependencies(): org.kevoree.modeling.meta.KMetaDependencies;
                    inputs(): org.kevoree.modeling.meta.KMetaInferInput[];
                    outputs(): org.kevoree.modeling.meta.KMetaInferOutput[];
                    temporalResolution(): number;
                    setTemporalResolution(tempo: number): void;
                    addParent(parentMetaClass: org.kevoree.modeling.meta.KMeta): void;
                }
                interface KMetaDependencies extends org.kevoree.modeling.meta.KMeta {
                    origin(): org.kevoree.modeling.meta.KMetaClass;
                    allDependencies(): org.kevoree.modeling.meta.KMetaDependency[];
                    dependencyByName(dependencyName: string): org.kevoree.modeling.meta.KMetaDependency;
                    addDependency(dependencyName: string, p_referredMetaClassIndex: number): org.kevoree.modeling.meta.KMetaDependency;
                }
                interface KMetaDependency extends org.kevoree.modeling.meta.KMeta {
                    referredMetaClassIndex(): number;
                }
                interface KMetaEnum extends org.kevoree.modeling.KType, org.kevoree.modeling.meta.KMeta {
                    literals(): org.kevoree.modeling.meta.KLiteral[];
                    literalByName(name: string): org.kevoree.modeling.meta.KLiteral;
                    literal(index: number): org.kevoree.modeling.meta.KLiteral;
                    addLiteral(name: string): org.kevoree.modeling.meta.KLiteral;
                }
                interface KMetaInferInput extends org.kevoree.modeling.meta.KMeta {
                    extractorQuery(): string;
                    extractor(): org.kevoree.modeling.traversal.KTraversal;
                }
                interface KMetaInferOutput extends org.kevoree.modeling.meta.KMeta {
                    attributeTypeId(): number;
                }
                interface KMetaModel extends org.kevoree.modeling.meta.KMeta {
                    metaClasses(): org.kevoree.modeling.meta.KMetaClass[];
                    metaClassByName(name: string): org.kevoree.modeling.meta.KMetaClass;
                    metaClass(index: number): org.kevoree.modeling.meta.KMetaClass;
                    addMetaClass(metaClassName: string): org.kevoree.modeling.meta.KMetaClass;
                    addInferMetaClass(metaClassName: string, inferAlg: org.kevoree.modeling.infer.KInferAlg): org.kevoree.modeling.meta.KMetaClass;
                    metaTypes(): org.kevoree.modeling.meta.KMetaEnum[];
                    metaTypeByName(name: string): org.kevoree.modeling.meta.KMetaEnum;
                    addMetaEnum(enumName: string): org.kevoree.modeling.meta.KMetaEnum;
                    createModel(manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.KModel<any>;
                }
                interface KMetaOperation extends org.kevoree.modeling.meta.KMeta {
                    originMetaClassIndex(): number;
                    paramTypes(): Int32Array;
                    paramMultiplicities(): boolean[];
                    returnType(): number;
                    returnTypeIsArray(): boolean;
                    addParam(type: org.kevoree.modeling.KType, isArray: boolean): void;
                    setReturnType(type: org.kevoree.modeling.KType, isArray: boolean): void;
                }
                interface KMetaRelation extends org.kevoree.modeling.meta.KMeta {
                    originMetaClassIndex(): number;
                    referredMetaClassIndex(): number;
                    oppositeName(): string;
                    visible(): boolean;
                    maxBound(): number;
                    setMaxBound(bound: number): void;
                }
                class KPrimitiveTypes {
                    static BOOL_ID: number;
                    static STRING_ID: number;
                    static LONG_ID: number;
                    static INT_ID: number;
                    static DOUBLE_ID: number;
                    static CONTINUOUS_ID: number;
                    static BOOL: org.kevoree.modeling.KType;
                    static STRING: org.kevoree.modeling.KType;
                    static LONG: org.kevoree.modeling.KType;
                    static INT: org.kevoree.modeling.KType;
                    static DOUBLE: org.kevoree.modeling.KType;
                    static CONTINUOUS: org.kevoree.modeling.KType;
                    static isEnum(attributeTypeId: number): boolean;
                }
                class MetaType {
                    static ATTRIBUTE: MetaType;
                    static RELATION: MetaType;
                    static DEPENDENCY: MetaType;
                    static DEPENDENCIES: MetaType;
                    static INPUT: MetaType;
                    static OUTPUT: MetaType;
                    static OPERATION: MetaType;
                    static CLASS: MetaType;
                    static MODEL: MetaType;
                    static ENUM: MetaType;
                    static LITERAL: MetaType;
                    equals(other: any): boolean;
                    static _MetaTypeVALUES: MetaType[];
                    static values(): MetaType[];
                }
                module impl {
                    class GenericModel extends org.kevoree.modeling.abs.AbstractKModel<any> {
                        private _p_metaModel;
                        constructor(mm: org.kevoree.modeling.meta.KMetaModel, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager);
                        metaModel(): org.kevoree.modeling.meta.KMetaModel;
                        internalCreateUniverse(universe: number): org.kevoree.modeling.KUniverse<any, any>;
                        internalCreateObject(universe: number, time: number, uuid: number, clazz: org.kevoree.modeling.meta.KMetaClass, previousUniverse: number, previousTime: number): org.kevoree.modeling.KObject;
                    }
                    class GenericObject extends org.kevoree.modeling.abs.AbstractKObject {
                        constructor(p_universe: number, p_time: number, p_uuid: number, p_metaClass: org.kevoree.modeling.meta.KMetaClass, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager, currentUniverse: number, currentTime: number);
                    }
                    class GenericObjectInfer extends org.kevoree.modeling.abs.AbstractKObjectInfer {
                        constructor(p_universe: number, p_time: number, p_uuid: number, p_metaClass: org.kevoree.modeling.meta.KMetaClass, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager, currentUniverse: number, currentTime: number);
                    }
                    class GenericUniverse extends org.kevoree.modeling.abs.AbstractKUniverse<any, any> {
                        constructor(p_key: number, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager);
                        internal_create(timePoint: number): org.kevoree.modeling.KView;
                    }
                    class GenericView extends org.kevoree.modeling.abs.AbstractKView {
                        constructor(p_universe: number, _time: number, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager);
                    }
                    class MetaAttribute implements org.kevoree.modeling.meta.KMetaAttribute {
                        private _name;
                        private _index;
                        _precision: number;
                        private _key;
                        private _attributeTypeId;
                        private _extrapolation;
                        attributeTypeId(): number;
                        index(): number;
                        metaName(): string;
                        metaType(): org.kevoree.modeling.meta.MetaType;
                        precision(): number;
                        key(): boolean;
                        strategy(): org.kevoree.modeling.extrapolation.Extrapolation;
                        setExtrapolation(extrapolation: org.kevoree.modeling.extrapolation.Extrapolation): void;
                        setPrecision(p_precision: number): void;
                        constructor(p_name: string, p_index: number, p_precision: number, p_key: boolean, p_attributeTypeId: number, p_extrapolation: org.kevoree.modeling.extrapolation.Extrapolation);
                    }
                    class MetaClass implements org.kevoree.modeling.meta.KMetaClass {
                        private _name;
                        private _index;
                        private _meta;
                        private _indexes;
                        private _alg;
                        private _cachedInputs;
                        private _cachedOutputs;
                        private _parents;
                        private _temporalResolution;
                        constructor(p_name: string, p_index: number, p_alg: org.kevoree.modeling.infer.KInferAlg, p_parents: Int32Array);
                        init(p_metaElements: org.kevoree.modeling.meta.KMeta[]): void;
                        metaByName(name: string): org.kevoree.modeling.meta.KMeta;
                        metaParents(): Int32Array;
                        attribute(name: string): org.kevoree.modeling.meta.KMetaAttribute;
                        reference(name: string): org.kevoree.modeling.meta.KMetaRelation;
                        operation(name: string): org.kevoree.modeling.meta.KMetaOperation;
                        metaElements(): org.kevoree.modeling.meta.KMeta[];
                        index(): number;
                        metaName(): string;
                        metaType(): org.kevoree.modeling.meta.MetaType;
                        meta(index: number): org.kevoree.modeling.meta.KMeta;
                        addAttribute(attributeName: string, p_type: org.kevoree.modeling.KType): org.kevoree.modeling.meta.KMetaAttribute;
                        private internal_addatt(attributeName, p_type);
                        addRelation(relationName: string, p_metaClass: org.kevoree.modeling.meta.KMetaClass, oppositeName: string): org.kevoree.modeling.meta.KMetaRelation;
                        private internal_addref(referenceName, p_metaClass, oppositeName);
                        private getOrCreate(p_name, p_oppositeName, p_oppositeClass, p_visible);
                        addOperation(operationName: string): org.kevoree.modeling.meta.KMetaOperation;
                        inferAlg(): org.kevoree.modeling.infer.KInferAlg;
                        addDependency(dependencyName: string, referredMetaClassIndex: number): org.kevoree.modeling.meta.KMetaDependency;
                        addInput(p_name: string, p_extractor: string): org.kevoree.modeling.meta.KMetaInferInput;
                        addOutput(p_name: string, p_type: org.kevoree.modeling.KType): org.kevoree.modeling.meta.KMetaInferOutput;
                        dependencies(): org.kevoree.modeling.meta.KMetaDependencies;
                        inputs(): org.kevoree.modeling.meta.KMetaInferInput[];
                        private cacheInputs();
                        outputs(): org.kevoree.modeling.meta.KMetaInferOutput[];
                        temporalResolution(): number;
                        setTemporalResolution(p_tempo: number): void;
                        private cacheOuputs();
                        private clearCached();
                        private internal_add_meta(p_new_meta);
                        addParent(parentMetaClass: org.kevoree.modeling.meta.KMeta): void;
                    }
                    class MetaDependencies implements org.kevoree.modeling.meta.KMetaDependencies {
                        private _origin;
                        private _dependencies;
                        static DEPENDENCIES_NAME: string;
                        private _index;
                        private _indexes;
                        constructor(p_index: number, p_origin: org.kevoree.modeling.meta.KMetaClass);
                        origin(): org.kevoree.modeling.meta.KMetaClass;
                        allDependencies(): org.kevoree.modeling.meta.KMetaDependency[];
                        dependencyByName(dependencyName: string): org.kevoree.modeling.meta.KMetaDependency;
                        index(): number;
                        metaName(): string;
                        metaType(): org.kevoree.modeling.meta.MetaType;
                        addDependency(p_dependencyName: string, p_referredMetaClassIndex: number): org.kevoree.modeling.meta.KMetaDependency;
                        private internal_add_dep(p_new_meta);
                    }
                    class MetaDependency implements org.kevoree.modeling.meta.KMetaDependency {
                        private _name;
                        private _index;
                        private _referredMetaClassIndex;
                        referredMetaClassIndex(): number;
                        index(): number;
                        metaName(): string;
                        metaType(): org.kevoree.modeling.meta.MetaType;
                        constructor(p_name: string, p_index: number, p_origin: org.kevoree.modeling.meta.KMetaDependencies, p_referredMetaClassIndex: number);
                    }
                    class MetaEnum implements org.kevoree.modeling.meta.KMetaEnum {
                        private _name;
                        private _index;
                        private _literals;
                        private _indexes;
                        constructor(p_name: string, p_index: number);
                        init(lits: org.kevoree.modeling.meta.KLiteral[]): void;
                        literals(): org.kevoree.modeling.meta.KLiteral[];
                        literalByName(p_name: string): org.kevoree.modeling.meta.KLiteral;
                        literal(p_index: number): org.kevoree.modeling.meta.KLiteral;
                        addLiteral(p_name: string): org.kevoree.modeling.meta.KLiteral;
                        name(): string;
                        id(): number;
                        index(): number;
                        metaName(): string;
                        metaType(): org.kevoree.modeling.meta.MetaType;
                        private internal_add_meta(p_new_meta);
                    }
                    class MetaInferInput implements org.kevoree.modeling.meta.KMetaInferInput {
                        private _name;
                        private _index;
                        private _extractor;
                        private _cachedTraversal;
                        constructor(p_name: string, p_index: number, p_extractor: string);
                        extractorQuery(): string;
                        extractor(): org.kevoree.modeling.traversal.KTraversal;
                        private cacheTraversal();
                        index(): number;
                        metaName(): string;
                        metaType(): org.kevoree.modeling.meta.MetaType;
                    }
                    class MetaInferOutput implements org.kevoree.modeling.meta.KMetaInferOutput {
                        private _name;
                        private _index;
                        private _type;
                        constructor(p_name: string, p_index: number, p_type: number);
                        index(): number;
                        metaName(): string;
                        metaType(): org.kevoree.modeling.meta.MetaType;
                        attributeTypeId(): number;
                    }
                    class MetaLiteral implements org.kevoree.modeling.meta.KLiteral {
                        private _name;
                        private _index;
                        private _className;
                        constructor(p_name: string, p_index: number, p_className: string);
                        index(): number;
                        metaName(): string;
                        metaType(): org.kevoree.modeling.meta.MetaType;
                        toString(): string;
                    }
                    class MetaModel implements org.kevoree.modeling.meta.KMetaModel {
                        private _name;
                        private _index;
                        private _metaClasses;
                        private _metaClasses_indexes;
                        private _metaTypes;
                        private _metaTypes_indexes;
                        index(): number;
                        metaName(): string;
                        metaType(): org.kevoree.modeling.meta.MetaType;
                        constructor(p_name: string);
                        init(p_metaClasses: org.kevoree.modeling.meta.KMetaClass[], p_metaEnums: org.kevoree.modeling.meta.KMetaEnum[]): void;
                        metaClasses(): org.kevoree.modeling.meta.KMetaClass[];
                        metaClassByName(name: string): org.kevoree.modeling.meta.KMetaClass;
                        metaClass(index: number): org.kevoree.modeling.meta.KMetaClass;
                        addMetaClass(metaClassName: string): org.kevoree.modeling.meta.KMetaClass;
                        addInferMetaClass(metaClassName: string, inferAlg: org.kevoree.modeling.infer.KInferAlg): org.kevoree.modeling.meta.KMetaClass;
                        metaTypes(): org.kevoree.modeling.meta.KMetaEnum[];
                        metaTypeByName(p_name: string): org.kevoree.modeling.meta.KMetaEnum;
                        addMetaEnum(enumName: string): org.kevoree.modeling.meta.KMetaEnum;
                        private internal_addmetaclass(metaClassName, alg);
                        private internal_add_meta_class(p_newMetaClass);
                        private internal_add_type(p_newType);
                        createModel(p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager): org.kevoree.modeling.KModel<any>;
                    }
                    class MetaOperation implements org.kevoree.modeling.meta.KMetaOperation {
                        private _name;
                        private _index;
                        private _originMetaClassIndex;
                        private _paramTypes;
                        private _paramIsArray;
                        private _returnType;
                        private _returnIsArray;
                        index(): number;
                        metaName(): string;
                        metaType(): org.kevoree.modeling.meta.MetaType;
                        originMetaClassIndex(): number;
                        paramTypes(): Int32Array;
                        paramMultiplicities(): boolean[];
                        returnType(): number;
                        returnTypeIsArray(): boolean;
                        constructor(p_name: string, p_index: number, p_originMetaClassIndex: number, p_paramTypes: Int32Array, p_returnType: number, p_paramIsArray: boolean[], p_returnIsArray: boolean);
                        addParam(type: org.kevoree.modeling.KType, isArray: boolean): void;
                        setReturnType(type: org.kevoree.modeling.KType, isArray: boolean): void;
                    }
                    class MetaRelation implements org.kevoree.modeling.meta.KMetaRelation {
                        private _name;
                        private _index;
                        private _visible;
                        private _referredMetaClassIndex;
                        private _op_name;
                        private _originMetaClassIndex;
                        private _maxBound;
                        referredMetaClassIndex(): number;
                        oppositeName(): string;
                        originMetaClassIndex(): number;
                        index(): number;
                        metaName(): string;
                        metaType(): org.kevoree.modeling.meta.MetaType;
                        visible(): boolean;
                        maxBound(): number;
                        setMaxBound(p_maxBound: number): void;
                        constructor(p_name: string, p_index: number, p_visible: boolean, p_referredMetaClassIndex: number, op_name: string, p_originMetaClassIndex: number, p_maxBound: number);
                    }
                }
            }
            module operation {
                interface KOperationManager {
                    register(operation: org.kevoree.modeling.meta.KMetaOperation, callback: org.kevoree.modeling.KOperation<any, any>): void;
                    invoke(source: org.kevoree.modeling.KObject, operation: org.kevoree.modeling.meta.KMetaOperation, param: any[], strategy: org.kevoree.modeling.operation.KOperationStrategy, callback: org.kevoree.modeling.KCallback<any>): void;
                    dispatch(message: org.kevoree.modeling.message.KMessage): void;
                    mappings(): string[];
                }
                interface KOperationStrategy {
                    (cdn: org.kevoree.modeling.cdn.KContentDeliveryDriver, metaOperation: org.kevoree.modeling.meta.KMetaOperation, source: org.kevoree.modeling.KObject, param: any[], manager: org.kevoree.modeling.operation.KOperationManager, callback: org.kevoree.modeling.KCallback<any>, additionalClassNames: string[]): void;
                }
                class OperationStrategies {
                    static ONLY_ONE: org.kevoree.modeling.operation.KOperationStrategy;
                    static serialize(type: number, elem: any, isArray: boolean): string;
                    static serializeParam(metaOperation: org.kevoree.modeling.meta.KMetaOperation, param: any[]): string[];
                    static serializeReturn(metaOperation: org.kevoree.modeling.meta.KMetaOperation, result: any): string;
                    static unserialize(metaModel: org.kevoree.modeling.meta.KMetaModel, type: number, payload: string, isArray: boolean): any;
                    static unserializeReturn(metaModel: org.kevoree.modeling.meta.KMetaModel, metaOperation: org.kevoree.modeling.meta.KMetaOperation, resultString: string): any;
                    static unserializeParam(metaModel: org.kevoree.modeling.meta.KMetaModel, metaOperation: org.kevoree.modeling.meta.KMetaOperation, param: string[]): any[];
                    static NAMED_PEER(peerName: string): org.kevoree.modeling.operation.KOperationStrategy;
                }
                module impl {
                    class HashOperationManager implements org.kevoree.modeling.operation.KOperationManager {
                        private staticOperations;
                        private _manager;
                        constructor(p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager);
                        register(operation: org.kevoree.modeling.meta.KMetaOperation, callback: org.kevoree.modeling.KOperation<any, any>): void;
                        invoke(source: org.kevoree.modeling.KObject, operation: org.kevoree.modeling.meta.KMetaOperation, param: any[], strategy: org.kevoree.modeling.operation.KOperationStrategy, callback: org.kevoree.modeling.KCallback<any>): void;
                        dispatch(message: org.kevoree.modeling.message.KMessage): void;
                        mappings(): string[];
                    }
                }
            }
            module scheduler {
                interface KScheduler {
                    dispatch(task: org.kevoree.modeling.scheduler.KTask): void;
                    start(): void;
                    stop(): void;
                }
                interface KTask {
                    (): void;
                }
                module impl {
                    class AsyncScheduler implements org.kevoree.modeling.scheduler.KScheduler, java.lang.Runnable {
                        dispatch: (task: KTask) => void;
                        start: () => void;
                        stop: () => void;
                        run: () => void;
                    }
                    class DirectScheduler implements org.kevoree.modeling.scheduler.KScheduler {
                        dispatch(task: org.kevoree.modeling.scheduler.KTask): void;
                        start(): void;
                        stop(): void;
                    }
                }
            }
            module traversal {
                interface KTraversal {
                    traverse(metaReference: org.kevoree.modeling.meta.KMetaRelation): org.kevoree.modeling.traversal.KTraversal;
                    traverseQuery(metaReferenceQuery: string): org.kevoree.modeling.traversal.KTraversal;
                    attributeQuery(attributeQuery: string): org.kevoree.modeling.traversal.KTraversal;
                    withAttribute(attribute: org.kevoree.modeling.meta.KMetaAttribute, expectedValue: any): org.kevoree.modeling.traversal.KTraversal;
                    withoutAttribute(attribute: org.kevoree.modeling.meta.KMetaAttribute, expectedValue: any): org.kevoree.modeling.traversal.KTraversal;
                    filter(filter: org.kevoree.modeling.traversal.KTraversalFilter): org.kevoree.modeling.traversal.KTraversal;
                    then(cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                    eval(expression: string, callback: org.kevoree.modeling.KCallback<any[]>): void;
                    map(attribute: org.kevoree.modeling.meta.KMetaAttribute, cb: org.kevoree.modeling.KCallback<any[]>): void;
                    collect(metaReference: org.kevoree.modeling.meta.KMetaRelation, continueCondition: org.kevoree.modeling.traversal.KTraversalFilter): org.kevoree.modeling.traversal.KTraversal;
                    traverseTime(timeOffset: number, steps: number, continueCondition: org.kevoree.modeling.traversal.KTraversalFilter): org.kevoree.modeling.traversal.KTraversal;
                    traverseUniverse(universeOffset: number, continueCondition: org.kevoree.modeling.traversal.KTraversalFilter): org.kevoree.modeling.traversal.KTraversal;
                    traverseIndex(indexName: string): org.kevoree.modeling.traversal.KTraversal;
                    exec(origins: org.kevoree.modeling.KObject[], resolver: org.kevoree.modeling.traversal.KTraversalIndexResolver, callback: org.kevoree.modeling.KCallback<any[]>): void;
                }
                interface KTraversalAction {
                    chain(next: org.kevoree.modeling.traversal.KTraversalAction): void;
                    execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                }
                interface KTraversalActionContext {
                    inputObjects(): org.kevoree.modeling.KObject[];
                    setInputObjects(newSet: org.kevoree.modeling.KObject[]): void;
                    indexResolver(): org.kevoree.modeling.traversal.KTraversalIndexResolver;
                    finalCallback(): org.kevoree.modeling.KCallback<any[]>;
                }
                interface KTraversalFilter {
                    (obj: org.kevoree.modeling.KObject): boolean;
                }
                interface KTraversalIndexResolver {
                    (indexName: string): org.kevoree.modeling.KObject[];
                }
                module impl {
                    class Traversal implements org.kevoree.modeling.traversal.KTraversal {
                        private static TERMINATED_MESSAGE;
                        private _initObjs;
                        private _initAction;
                        private _lastAction;
                        private _terminated;
                        constructor(p_roots: org.kevoree.modeling.KObject[]);
                        private internal_chain_action(p_action);
                        traverse(p_metaReference: org.kevoree.modeling.meta.KMetaRelation): org.kevoree.modeling.traversal.KTraversal;
                        traverseQuery(p_metaReferenceQuery: string): org.kevoree.modeling.traversal.KTraversal;
                        withAttribute(p_attribute: org.kevoree.modeling.meta.KMetaAttribute, p_expectedValue: any): org.kevoree.modeling.traversal.KTraversal;
                        withoutAttribute(p_attribute: org.kevoree.modeling.meta.KMetaAttribute, p_expectedValue: any): org.kevoree.modeling.traversal.KTraversal;
                        attributeQuery(p_attributeQuery: string): org.kevoree.modeling.traversal.KTraversal;
                        filter(p_filter: org.kevoree.modeling.traversal.KTraversalFilter): org.kevoree.modeling.traversal.KTraversal;
                        collect(metaReference: org.kevoree.modeling.meta.KMetaRelation, continueCondition: org.kevoree.modeling.traversal.KTraversalFilter): org.kevoree.modeling.traversal.KTraversal;
                        traverseIndex(p_indexName: string): org.kevoree.modeling.traversal.KTraversal;
                        traverseTime(timeOffset: number, steps: number, continueCondition: org.kevoree.modeling.traversal.KTraversalFilter): org.kevoree.modeling.traversal.KTraversal;
                        traverseUniverse(universeOffset: number, continueCondition: org.kevoree.modeling.traversal.KTraversalFilter): org.kevoree.modeling.traversal.KTraversal;
                        then(cb: org.kevoree.modeling.KCallback<org.kevoree.modeling.KObject[]>): void;
                        eval(p_expression: string, callback: org.kevoree.modeling.KCallback<any[]>): void;
                        map(attribute: org.kevoree.modeling.meta.KMetaAttribute, cb: org.kevoree.modeling.KCallback<any[]>): void;
                        exec(origins: org.kevoree.modeling.KObject[], resolver: org.kevoree.modeling.traversal.KTraversalIndexResolver, callback: org.kevoree.modeling.KCallback<any[]>): void;
                    }
                    class TraversalContext implements org.kevoree.modeling.traversal.KTraversalActionContext {
                        private _inputs;
                        private _resolver;
                        private _finalCallback;
                        constructor(_inputs: org.kevoree.modeling.KObject[], _resolver: org.kevoree.modeling.traversal.KTraversalIndexResolver, p_finalCallback: org.kevoree.modeling.KCallback<any[]>);
                        inputObjects(): org.kevoree.modeling.KObject[];
                        setInputObjects(p_newSet: org.kevoree.modeling.KObject[]): void;
                        indexResolver(): org.kevoree.modeling.traversal.KTraversalIndexResolver;
                        finalCallback(): org.kevoree.modeling.KCallback<any[]>;
                    }
                    module actions {
                        class DeepCollectAction implements org.kevoree.modeling.traversal.KTraversalAction {
                            private _next;
                            private _reference;
                            private _continueCondition;
                            private _alreadyPassed;
                            private _finalElements;
                            constructor(p_reference: org.kevoree.modeling.meta.KMetaRelation, p_continueCondition: org.kevoree.modeling.traversal.KTraversalFilter);
                            chain(p_next: org.kevoree.modeling.traversal.KTraversalAction): void;
                            execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                            private executeStep(p_inputStep, private_callback);
                        }
                        class FilterAction implements org.kevoree.modeling.traversal.KTraversalAction {
                            private _next;
                            private _filter;
                            constructor(p_filter: org.kevoree.modeling.traversal.KTraversalFilter);
                            chain(p_next: org.kevoree.modeling.traversal.KTraversalAction): void;
                            execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                        }
                        class FilterAttributeAction implements org.kevoree.modeling.traversal.KTraversalAction {
                            private _next;
                            private _attribute;
                            private _expectedValue;
                            constructor(p_attribute: org.kevoree.modeling.meta.KMetaAttribute, p_expectedValue: any);
                            chain(p_next: org.kevoree.modeling.traversal.KTraversalAction): void;
                            execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                        }
                        class FilterAttributeQueryAction implements org.kevoree.modeling.traversal.KTraversalAction {
                            private _next;
                            private _attributeQuery;
                            constructor(p_attributeQuery: string);
                            chain(p_next: org.kevoree.modeling.traversal.KTraversalAction): void;
                            execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                            private buildParams(p_paramString);
                        }
                        module FilterAttributeQueryAction {
                            class QueryParam {
                                private _name;
                                private _value;
                                private _negative;
                                constructor(p_name: string, p_value: string, p_negative: boolean);
                                name(): string;
                                value(): string;
                                isNegative(): boolean;
                            }
                        }
                        class FilterNotAttributeAction implements org.kevoree.modeling.traversal.KTraversalAction {
                            private _next;
                            private _attribute;
                            private _expectedValue;
                            constructor(p_attribute: org.kevoree.modeling.meta.KMetaAttribute, p_expectedValue: any);
                            chain(p_next: org.kevoree.modeling.traversal.KTraversalAction): void;
                            execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                        }
                        class MapAction implements org.kevoree.modeling.traversal.KTraversalAction {
                            private _attribute;
                            constructor(p_attribute: org.kevoree.modeling.meta.KMetaAttribute);
                            chain(next: org.kevoree.modeling.traversal.KTraversalAction): void;
                            execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                        }
                        class MathExpressionAction implements org.kevoree.modeling.traversal.KTraversalAction {
                            private _expression;
                            private _engine;
                            constructor(p_expression: string);
                            chain(next: org.kevoree.modeling.traversal.KTraversalAction): void;
                            execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                        }
                        class RemoveDuplicateAction implements org.kevoree.modeling.traversal.KTraversalAction {
                            private _next;
                            chain(p_next: org.kevoree.modeling.traversal.KTraversalAction): void;
                            execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                        }
                        class TraverseAction implements org.kevoree.modeling.traversal.KTraversalAction {
                            private _next;
                            private _reference;
                            constructor(p_reference: org.kevoree.modeling.meta.KMetaRelation);
                            chain(p_next: org.kevoree.modeling.traversal.KTraversalAction): void;
                            execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                        }
                        class TraverseIndexAction implements org.kevoree.modeling.traversal.KTraversalAction {
                            private _next;
                            private _indexName;
                            constructor(p_indexName: string);
                            chain(p_next: org.kevoree.modeling.traversal.KTraversalAction): void;
                            execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                        }
                        class TraverseQueryAction implements org.kevoree.modeling.traversal.KTraversalAction {
                            private SEP;
                            private _next;
                            private _referenceQuery;
                            constructor(p_referenceQuery: string);
                            chain(p_next: org.kevoree.modeling.traversal.KTraversalAction): void;
                            execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                        }
                        class TraverseTimeAction implements org.kevoree.modeling.traversal.KTraversalAction {
                            private _next;
                            private _timeOffset;
                            private _steps;
                            private _continueContition;
                            constructor(p_timeOffset: number, p_steps: number, p_continueCondition: org.kevoree.modeling.traversal.KTraversalFilter);
                            chain(p_next: org.kevoree.modeling.traversal.KTraversalAction): void;
                            execute(context: org.kevoree.modeling.traversal.KTraversalActionContext): void;
                        }
                    }
                }
                module query {
                    interface KQueryEngine {
                        eval(query: string, origins: org.kevoree.modeling.KObject[], callback: org.kevoree.modeling.KCallback<any[]>): void;
                        buildTraversal(query: string): org.kevoree.modeling.traversal.KTraversal;
                    }
                    module impl {
                        class QueryEngine implements org.kevoree.modeling.traversal.query.KQueryEngine {
                            private static INSTANCE;
                            static OPEN_BRACKET: string;
                            static CLOSE_BRACKET: string;
                            static PIPE_SEP: string;
                            static getINSTANCE(): org.kevoree.modeling.traversal.query.KQueryEngine;
                            eval(query: string, origins: org.kevoree.modeling.KObject[], callback: org.kevoree.modeling.KCallback<any[]>): void;
                            buildTraversal(query: string): org.kevoree.modeling.traversal.KTraversal;
                        }
                    }
                }
                module visitor {
                    interface KModelAttributeVisitor {
                        (metaAttribute: org.kevoree.modeling.meta.KMetaAttribute, value: any): void;
                    }
                    interface KModelVisitor {
                        (elem: org.kevoree.modeling.KObject): org.kevoree.modeling.traversal.visitor.KVisitResult;
                    }
                    class KVisitResult {
                        static CONTINUE: KVisitResult;
                        static SKIP: KVisitResult;
                        static STOP: KVisitResult;
                        equals(other: any): boolean;
                        static _KVisitResultVALUES: KVisitResult[];
                        static values(): KVisitResult[];
                    }
                }
            }
            module util {
                class Base64 {
                    private static encodeArray;
                    private static decodeArray;
                    private static powTwo;
                    static encodeLong(l: number): string;
                    static encodeLongToBuffer(l: number, buffer: java.lang.StringBuilder): void;
                    static encodeInt(l: number): string;
                    static encodeIntToBuffer(l: number, buffer: java.lang.StringBuilder): void;
                    static decodeToLong(s: any): number;
                    static decodeToLongWithBounds(s: string, offsetBegin: number, offsetEnd: number): number;
                    static decodeToInt(s: any): number;
                    static decodeToIntWithBounds(s: string, offsetBegin: number, offsetEnd: number): number;
                    static encodeDouble(d: number): string;
                    static encodeDoubleToBuffer(d: number, buffer: java.lang.StringBuilder): void;
                    static decodeToDouble(s: string): number;
                    static decodeToDoubleWithBounds(s: string, offsetBegin: number, offsetEnd: number): number;
                    static encodeBoolArray(boolArr: Array<boolean>): string;
                    static encodeBoolArrayToBuffer(boolArr: Array<boolean>, buffer: java.lang.StringBuilder): void;
                    static decodeBoolArray(s: string, arraySize: number): any[];
                    static decodeToBoolArrayWithBounds(s: string, offsetBegin: number, offsetEnd: number, arraySize: number): any[];
                    static encodeString(s: string): string;
                    static encodeStringToBuffer(s: string, buffer: java.lang.StringBuilder): void;
                    static decodeString(s: string): string;
                    static decodeToStringWithBounds(s: string, offsetBegin: number, offsetEnd: number): string;
                }
                class Checker {
                    static isDefined(param: any): boolean;
                }
                class PrimitiveHelper {
                    static startsWith(src: string, prefix: string): boolean;
                    static endsWith(src: string, prefix: string): boolean;
                    static matches(src: string, regex: string): boolean;
                    static equals(src: string, other: string): boolean;
                    static parseInt(val: string): number;
                    static parseLong(val: string): number;
                    static parseDouble(val: string): number;
                    static parseShort(val: string): number;
                    static parseBoolean(val: string): boolean;
                    static SHORT_MIN_VALUE(): number;
                    static SHORT_MAX_VALUE(): number;
                    static isNaN(val: number): boolean;
                    static DOUBLE_MIN_VALUE(): number;
                    static DOUBLE_MAX_VALUE(): number;
                }
                module maths {
                    class Correlations {
                        static pearson(x: Float64Array, y: Float64Array): number;
                    }
                    class Distribution {
                        static inverseNormalCDF(q: number): number;
                        static gaussian(features: Float64Array, means: Float64Array, variances: Float64Array): number;
                        static gaussianArray(features: org.kevoree.modeling.util.maths.structure.KArray2D, row: number, means: Float64Array, variances: Float64Array): number;
                        static parallelGaussian(features: Float64Array, means: Float64Array, variances: Float64Array): Float64Array;
                        static gaussianOneFeature(feature: number, mean: number, variance: number): number;
                    }
                    class PolynomialFit {
                        A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                        coef: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                        y: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                        solver: org.kevoree.modeling.util.maths.matrix.solvers.AdjLinearSolverQr;
                        constructor(degree: number);
                        getCoef(): Float64Array;
                        fit(samplePoints: Float64Array, observations: Float64Array): void;
                        static extrapolate(time: number, weights: Float64Array): number;
                    }
                    class Ranking {
                        static wilsonRank(positive: number, negative: number, confidence: number): number;
                    }
                    class Statistic {
                        static calcHistogram(data: Float64Array, dataratings: Float64Array, numBins: number): void;
                    }
                    class StringDistance {
                        static levenshtein(s0: string, s1: string): number;
                    }
                    module expression {
                        interface KMathExpressionEngine {
                            parse(p_expression: string): org.kevoree.modeling.util.maths.expression.KMathExpressionEngine;
                            setVarResolver(resolver: org.kevoree.modeling.util.maths.expression.KMathVariableResolver): void;
                            eval(context: org.kevoree.modeling.KObject): number;
                        }
                        interface KMathVariableResolver {
                            (potentialVarName: string): number;
                        }
                        module impl {
                            class MathDoubleToken implements org.kevoree.modeling.util.maths.expression.impl.MathToken {
                                private _content;
                                type(): number;
                                constructor(_content: number);
                                content(): number;
                                type2(): number;
                            }
                            class MathEntities {
                                private static INSTANCE;
                                operators: org.kevoree.modeling.memory.chunk.KStringMap<org.kevoree.modeling.util.maths.expression.impl.MathOperation>;
                                functions: org.kevoree.modeling.memory.chunk.KStringMap<org.kevoree.modeling.util.maths.expression.impl.MathFunction>;
                                static getINSTANCE(): org.kevoree.modeling.util.maths.expression.impl.MathEntities;
                                constructor();
                            }
                            class MathExpressionEngine implements org.kevoree.modeling.util.maths.expression.KMathExpressionEngine {
                                private varResolver;
                                static decimalSeparator: string;
                                static minusSign: string;
                                private _cacheAST;
                                constructor();
                                static isNumber(st: string): boolean;
                                static isDigit(c: string): boolean;
                                static isLetter(c: string): boolean;
                                static isWhitespace(c: string): boolean;
                                private shuntingYard(expression);
                                eval(context: org.kevoree.modeling.KObject): number;
                                buildAST(rpn: java.util.List<string>): org.kevoree.modeling.util.maths.expression.impl.MathToken[];
                                parse(p_expression: string): org.kevoree.modeling.util.maths.expression.KMathExpressionEngine;
                                setVarResolver(p_resolver: org.kevoree.modeling.util.maths.expression.KMathVariableResolver): void;
                            }
                            class MathExpressionTokenizer {
                                private pos;
                                private input;
                                private previousToken;
                                constructor(input: string);
                                hasNext(): boolean;
                                private peekNextChar();
                                next(): string;
                                getPos(): number;
                            }
                            class MathFreeToken implements org.kevoree.modeling.util.maths.expression.impl.MathToken {
                                private _content;
                                constructor(content: string);
                                content(): string;
                                type(): number;
                                type2(): number;
                            }
                            class MathFunction implements org.kevoree.modeling.util.maths.expression.impl.MathToken {
                                private name;
                                private numParams;
                                constructor(name: string, numParams: number);
                                getName(): string;
                                getNumParams(): number;
                                eval(p: Float64Array): number;
                                private date_to_seconds(value);
                                private date_to_minutes(value);
                                private date_to_hours(value);
                                private date_to_days(value);
                                private date_to_months(value);
                                private date_to_year(value);
                                private date_to_dayofweek(value);
                                type(): number;
                                type2(): number;
                            }
                            class MathOperation implements org.kevoree.modeling.util.maths.expression.impl.MathToken {
                                private oper;
                                private precedence;
                                private leftAssoc;
                                constructor(oper: string, precedence: number, leftAssoc: boolean);
                                getOper(): string;
                                getPrecedence(): number;
                                isLeftAssoc(): boolean;
                                eval(v1: number, v2: number): number;
                                type(): number;
                                type2(): number;
                            }
                            interface MathToken {
                                type(): number;
                                type2(): number;
                            }
                        }
                    }
                    module matrix {
                        class CommonOps {
                            static BLOCK_WIDTH: number;
                            static TRANSPOSE_SWITCH: number;
                            static MULT_COLUMN_SWITCH: number;
                            static EPS: number;
                            static mult(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static memset(data: Float64Array, val: number): void;
                            static multAddalpha(alpha: number, a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multAlphaBetaTransA(alpha: number, a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, beta: number): void;
                            static multTransA(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multTransB(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static subvector(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, rowA: number, colA: number, length: number, row: boolean, offsetV: number, v: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static abs(matrix: org.kevoree.modeling.util.maths.matrix.SimpleMatrix): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            static trace(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): number;
                            static transposeMatrix(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, A_tran: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            static transpose(mat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static det(mat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): number;
                            static invert(mat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, result: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                            static copyMatrix(matA: org.kevoree.modeling.util.maths.structure.KArray2D, ejmlmatA: org.kevoree.modeling.util.maths.matrix.SimpleMatrix): void;
                            static copyMatrixDense(matA: org.kevoree.modeling.util.maths.structure.impl.NativeArray2D, ejmlmatA: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static extractImpl(src: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, srcY0: number, srcX0: number, dst: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, dstY0: number, dstX0: number, numRows: number, numCols: number): void;
                            static extractInsert(src: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, srcY0: number, srcY1: number, srcX0: number, srcX1: number, dst: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, dstY0: number, dstX0: number): void;
                            static insert(src: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, dest: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, destY0: number, destX0: number): void;
                            static extract4Int(src: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, srcY0: number, srcY1: number, srcX0: number, srcX1: number): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            static columnsToVector(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, v: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F[]): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F[];
                            static rowsToVector(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, v: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F[]): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F[];
                            static setIdentity(mat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static identity1D(width: number): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            static identity(numRows: number, numCols: number): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            static diag(diagEl: Float64Array): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            static diagMatrix(ret: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, width: number, diagEl: Float64Array): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            static kron(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, B: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, C: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static extractDiag(src: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, dst: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static extractRow(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, row: number, out: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            static extractColumn(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, column: number, out: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            static elementMax(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): number;
                            static elementMaxAbs(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): number;
                            static elementMult(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static elementSum(mat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): number;
                            static addEquals(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static addEqualsbeta(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, beta: number, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static add(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static subtract3mat(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static scale(alpha: number, a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static changeSign(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static fill(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, value: number): void;
                            static normalizeF(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static normF(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): number;
                            static extract6M(src: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, srcY0: number, srcY1: number, srcX0: number, srcX1: number, dst: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, dstY0: number, dstX0: number): void;
                            static multAlphaBeta(alpha: number, matrix: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, matrix1: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, matrix2: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, beta: number): void;
                        }
                        class Complex64F {
                            real: number;
                            imaginary: number;
                            constructor();
                            getReal(): number;
                            getMagnitude(): number;
                            getMagnitude2(): number;
                            setReal(real: number): void;
                            setValues(real: number, imaginary: number): void;
                            isReal(): boolean;
                            toString(): string;
                            times(a: org.kevoree.modeling.util.maths.matrix.Complex64F): org.kevoree.modeling.util.maths.matrix.Complex64F;
                        }
                        class ComplexMath64F {
                            static conj(input: org.kevoree.modeling.util.maths.matrix.Complex64F, conj: org.kevoree.modeling.util.maths.matrix.Complex64F): void;
                            static plus(a: org.kevoree.modeling.util.maths.matrix.Complex64F, b: org.kevoree.modeling.util.maths.matrix.Complex64F, result: org.kevoree.modeling.util.maths.matrix.Complex64F): void;
                            static minus(a: org.kevoree.modeling.util.maths.matrix.Complex64F, b: org.kevoree.modeling.util.maths.matrix.Complex64F, result: org.kevoree.modeling.util.maths.matrix.Complex64F): void;
                            static multiply(a: org.kevoree.modeling.util.maths.matrix.Complex64F, b: org.kevoree.modeling.util.maths.matrix.Complex64F, result: org.kevoree.modeling.util.maths.matrix.Complex64F): void;
                            static divide(a: org.kevoree.modeling.util.maths.matrix.Complex64F, b: org.kevoree.modeling.util.maths.matrix.Complex64F, result: org.kevoree.modeling.util.maths.matrix.Complex64F): void;
                            static root(a: org.kevoree.modeling.util.maths.matrix.Complex64F, N: number, k: number, result: org.kevoree.modeling.util.maths.matrix.Complex64F): void;
                            static sqrt(input: org.kevoree.modeling.util.maths.matrix.Complex64F, root: org.kevoree.modeling.util.maths.matrix.Complex64F): void;
                        }
                        class DenseMatrix64F {
                            numRows: number;
                            numCols: number;
                            data: Float64Array;
                            static MULT_COLUMN_SWITCH: number;
                            constructor(numRows: number, numCols: number);
                            constructorDenseMatrix(orig: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            static setIdentity(mat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static widentity(width: number): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            static identity(numRows: number, numCols: number): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            zero(): void;
                            copy(): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            static fill(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, value: number): void;
                            reshapeBoolean(numRows: number, numCols: number, saveValues: boolean): void;
                            cset(row: number, col: number, value: number): void;
                            add(row: number, col: number, value: number): void;
                            plus(index: number, val: number): number;
                            scale(value: number): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            minus(index: number, val: number): number;
                            times(index: number, val: number): number;
                            div(index: number, val: number): number;
                            reshape(numRows: number, numCols: number): void;
                            getNumRows(): number;
                            getNumCols(): number;
                            getData(): Float64Array;
                            get(row: number, col: number): number;
                            getNumElements(): number;
                            getIndex(row: number, col: number): number;
                            getValueAtIndex(index: number): number;
                            setValueAtIndex(index: number, val: number): number;
                            setNumRows(numRows: number): void;
                            setNumCols(numCols: number): void;
                            setData(data: Float64Array): void;
                            setMatrix(b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            set(row: number, col: number, value: number): void;
                        }
                        class MatrixFeatures {
                            static isVector(mat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                            static isSymmetricDouble(m: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, tol: number): boolean;
                            static isIdentical(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, tol: number): boolean;
                        }
                        class MatrixMatrixMult {
                            static multTransA_smallMV(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, B: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, C: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multTransA_reorderMV(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, B: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, C: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multTransA_reorderMM(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multTransA_smallMM(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multTransA(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static mult_reorder(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static mult_small(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multTransA_reorder(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multTransA_small(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multTransB(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multAlphaTransA_reorder(alpha: number, a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multAlphaTransA_small(alpha: number, a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multAdd_reorderalpha(alpha: number, a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multAdd_smallalpha(alpha: number, a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, c: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                        }
                        class MatrixVectorMult {
                            static mult(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, B: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, C: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multTransA_small(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, B: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, C: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static multTransA_reorder(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, B: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, C: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                        }
                        class SimpleMatrix {
                            mat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            getMatrix(): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                            setValue2D(row: number, col: number, value: number): void;
                            setValue1D(index: number, value: number): void;
                            getValue2D(row: number, col: number): number;
                            getValue1D(index: number): number;
                            getIndex(row: number, col: number): number;
                            mult(b: org.kevoree.modeling.util.maths.matrix.SimpleMatrix): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            scale(val: number): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            plus(b: org.kevoree.modeling.util.maths.matrix.SimpleMatrix): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            copy(): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            numRows(): number;
                            numCols(): number;
                            getNumElements(): number;
                            extractDiag(): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            isIdentical(a: org.kevoree.modeling.util.maths.matrix.SimpleMatrix, tol: number): boolean;
                            trace(): number;
                            elementMaxAbs(): number;
                            elementSum(): number;
                            elementMult(b: org.kevoree.modeling.util.maths.matrix.SimpleMatrix): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            isInBounds(row: number, col: number): boolean;
                            printDimensions(): void;
                            transpose(): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            constructor(numRows: number, numCols: number);
                            static wrap(internalMat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            static identity(width: number): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            minus(b: org.kevoree.modeling.util.maths.matrix.SimpleMatrix): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            invert(): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            determinant(): number;
                            createMatrix(numRows: number, numCols: number): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            extractVector(extractRow: boolean, element: number): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            eig(): org.kevoree.modeling.util.maths.matrix.solvers.SimpleEVD<any>;
                            svd(compact: boolean): org.kevoree.modeling.util.maths.matrix.solvers.SimpleSVD<any>;
                            combine(insertRow: number, insertCol: number, B: org.kevoree.modeling.util.maths.matrix.SimpleMatrix): org.kevoree.modeling.util.maths.matrix.SimpleMatrix;
                            insertIntoThis(insertRow: number, insertCol: number, B: org.kevoree.modeling.util.maths.matrix.SimpleMatrix): void;
                        }
                        class TransposeAlgs {
                            static square(mat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            static block(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, A_tran: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, blockLength: number): void;
                            static standard(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, A_tran: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                        }
                        module solvers {
                            class AdjLinearSolverQr {
                                numRows: number;
                                numCols: number;
                                private decomposer;
                                maxRows: number;
                                maxCols: number;
                                Q: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                R: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                private Y;
                                private Z;
                                setA(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                private solveU(U, b, n);
                                solve(B: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, X: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                constructor();
                                setMaxSize(maxRows: number, maxCols: number): void;
                            }
                            class LUDecompositionAlt_D64 {
                                LU: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                maxWidth: number;
                                m: number;
                                n: number;
                                dataLU: Float64Array;
                                vv: Float64Array;
                                indx: Int32Array;
                                pivot: Int32Array;
                                pivsign: number;
                                setExpectedMaxSize(numRows: number, numCols: number): void;
                                getLU(): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                getIndx(): Int32Array;
                                getPivot(): Int32Array;
                                getLower(lower: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                getUpper(upper: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                decomposeCommonInit(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                _solveVectorInternal(vv: Float64Array): void;
                                _getVV(): Float64Array;
                                computeDeterminant(): number;
                                decompose(a: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                            }
                            class LinearSolverLu_D64 {
                                A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                numRows: number;
                                numCols: number;
                                decomp: org.kevoree.modeling.util.maths.matrix.solvers.LUDecompositionAlt_D64;
                                doImprove: boolean;
                                getA(): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                _setA(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                constructor(decomp: org.kevoree.modeling.util.maths.matrix.solvers.LUDecompositionAlt_D64);
                                setA(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                invert(A_inv: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                improveSol(b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, x: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                modifiesA(): boolean;
                                modifiesB(): boolean;
                                solve(b: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, x: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                            }
                            class SimpleEVD<T extends org.kevoree.modeling.util.maths.matrix.SimpleMatrix> {
                                private eig;
                                mat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                constructor(mat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F);
                                getNumberOfEigenvalues(): number;
                                getEigenvalue(index: number): org.kevoree.modeling.util.maths.matrix.Complex64F;
                                getEigenVector(index: number): T;
                                getEVD(): org.kevoree.modeling.util.maths.matrix.solvers.decomposition.SwitchingEigenDecomposition;
                                getIndexMax(): number;
                                getIndexMin(): number;
                            }
                            class SimpleSVD<T extends org.kevoree.modeling.util.maths.matrix.SimpleMatrix> {
                                private svd;
                                private U;
                                private W;
                                private V;
                                private mat;
                                tol: number;
                                private static swapRowOrCol(M, tran, i, bigIndex);
                                static singularThreshold(svd: org.kevoree.modeling.util.maths.matrix.solvers.SvdImplicitQrDecompose_D64): number;
                                static descendingOrder(U: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, tranU: boolean, W: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, V: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, tranV: boolean): void;
                                constructor(mat: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, compact: boolean);
                                getU(): T;
                                getW(): T;
                                getV(): T;
                            }
                            class SvdImplicitQrAlgorithm {
                                rand: java.util.Random;
                                Ut: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                Vt: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                totalSteps: number;
                                maxValue: number;
                                N: number;
                                eigenSmall: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.EigenvalueSmall;
                                numExceptional: number;
                                nextExceptional: number;
                                diag: Float64Array;
                                off: Float64Array;
                                bulge: number;
                                x1: number;
                                x2: number;
                                steps: number;
                                splits: Int32Array;
                                numSplits: number;
                                private exceptionalThresh;
                                private maxIterations;
                                followScript: boolean;
                                private static giveUpOnKnown;
                                private values;
                                private fastValues;
                                private findingZeros;
                                c: number;
                                s: number;
                                constructor();
                                getUt(): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                setUt(ut: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                getVt(): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                setVt(vt: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                setMatrix(numRows: number, numCols: number, diag: Float64Array, off: Float64Array): void;
                                swapDiag(diag: Float64Array): Float64Array;
                                swapOff(off: Float64Array): Float64Array;
                                setMaxValue(maxValue: number): void;
                                initParam(M: number, N: number): void;
                                process(): boolean;
                                processValues(values: Float64Array): boolean;
                                _process(): boolean;
                                private performDynamicStep();
                                private performScriptedStep();
                                incrementSteps(): void;
                                isOffZero(i: number): boolean;
                                isDiagonalZero(i: number): boolean;
                                resetSteps(): void;
                                nextSplit(): boolean;
                                performImplicitSingleStep(scale: number, lambda: number, byAngle: boolean): void;
                                updateRotator(Q: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, m: number, n: number, c: number, s: number): void;
                                private computeBulgeScale();
                                createBulge(x1: number, p: number, scale: number, byAngle: boolean): void;
                                computeRotator(rise: number, run: number): void;
                                removeBulgeLeft(x1: number, notLast: boolean): void;
                                removeBulgeRight(x1: number): void;
                                setSubmatrix(x1: number, x2: number): void;
                                selectWilkinsonShift(scale: number): number;
                                static signum(d: number): number;
                                eigenBB_2x2(x1: number): void;
                                checkForAndHandleZeros(): boolean;
                                private pushRight(row);
                                private rotatorPushRight(m);
                                private rotatorPushRight2(m, offset);
                                exceptionShift(): void;
                                getNumberOfSingularValues(): number;
                                getSingularValue(index: number): number;
                                setFastValues(b: boolean): void;
                                getSingularValues(): Float64Array;
                                getDiag(): Float64Array;
                                getOff(): Float64Array;
                                getMaxValue(): number;
                            }
                            class SvdImplicitQrDecompose_D64 {
                                private numRows;
                                private numCols;
                                private numRowsT;
                                private numColsT;
                                private canUseTallBidiagonal;
                                private bidiag;
                                private qralg;
                                diag: Float64Array;
                                off: Float64Array;
                                private Ut;
                                private Vt;
                                private singularValues;
                                private numSingular;
                                private compact;
                                private computeU;
                                private computeV;
                                private prefComputeU;
                                private prefComputeV;
                                private transposed;
                                private A_mod;
                                constructor(compact: boolean, computeU: boolean, computeV: boolean, canUseTallBidiagonal: boolean);
                                getSingularValues(): Float64Array;
                                numberOfSingularValues(): number;
                                isCompact(): boolean;
                                getU(U: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, transpose: boolean): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                getV(V: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, transpose: boolean): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                getW(W: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                decompose(orig: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                inputModified(): boolean;
                                private bidiagonalization(orig);
                                private undoTranspose();
                                private computeUWV();
                                private setup(orig);
                                private makeSingularPositive();
                                getNumRows(): number;
                                getNumCols(): number;
                            }
                            class TriangularSolver {
                                static solveU2arr(U: Float64Array, b: Float64Array, n: number): void;
                                static solveU(U: Float64Array, b: Float64Array, sideLength: number, minRow: number, maxRow: number): void;
                            }
                            module decomposition {
                                interface BidiagonalDecomposition<T extends org.kevoree.modeling.util.maths.matrix.DenseMatrix64F> {
                                    getB(B: T, compact: boolean): T;
                                    getU(U: T, transpose: boolean, compact: boolean): T;
                                    getV(V: T, transpose: boolean, compact: boolean): T;
                                    getDiagonal(diag: Float64Array, off: Float64Array): void;
                                    decompose(orig: T): boolean;
                                    inputModified(): boolean;
                                }
                                class BidiagonalDecompositionRow_D64 implements org.kevoree.modeling.util.maths.matrix.solvers.decomposition.BidiagonalDecomposition<org.kevoree.modeling.util.maths.matrix.DenseMatrix64F> {
                                    private UBV;
                                    private m;
                                    private n;
                                    private min;
                                    private gammasU;
                                    private gammasV;
                                    private b;
                                    private u;
                                    constructor(numElements: number);
                                    decompose(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                    init(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                    getUBV(): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    getDiagonal(diag: Float64Array, off: Float64Array): void;
                                    getB(B: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, compact: boolean): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    static handleB(B: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, compact: boolean, m: number, n: number, min: number): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    getU(U: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, transpose: boolean, compact: boolean): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    static handleU(U: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, transpose: boolean, compact: boolean, m: number, n: number, min: number): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    getV(V: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, transpose: boolean, compact: boolean): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    static handleV(V: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, transpose: boolean, compact: boolean, m: number, n: number, min: number): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    private _decompose();
                                    computeU(k: number): void;
                                    computeV(k: number): void;
                                    getGammasU(): Float64Array;
                                    getGammasV(): Float64Array;
                                    inputModified(): boolean;
                                }
                                class BidiagonalDecompositionTall_D64 implements org.kevoree.modeling.util.maths.matrix.solvers.decomposition.BidiagonalDecomposition<org.kevoree.modeling.util.maths.matrix.DenseMatrix64F> {
                                    decompQRP: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.QRxColPivDecompositionHouseholderColumn_D64;
                                    decompBi: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.BidiagonalDecomposition<org.kevoree.modeling.util.maths.matrix.DenseMatrix64F>;
                                    B: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    m: number;
                                    n: number;
                                    min: number;
                                    getDiagonal(diag: Float64Array, off: Float64Array): void;
                                    getB(B: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, compact: boolean): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    getU(U: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, transpose: boolean, compact: boolean): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    getV(V: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, transpose: boolean, compact: boolean): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    decompose(orig: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                    inputModified(): boolean;
                                }
                                class EigenvalueSmall {
                                    value0: org.kevoree.modeling.util.maths.matrix.Complex64F;
                                    value1: org.kevoree.modeling.util.maths.matrix.Complex64F;
                                    value2x2(a11: number, a12: number, a21: number, a22: number): void;
                                    value2x2_fast(a11: number, a12: number, a21: number, a22: number): void;
                                    symm2x2_fast(a11: number, a12: number, a22: number): void;
                                }
                                class HessenbergSimilarDecomposition_D64 {
                                    private QH;
                                    private N;
                                    private gammas;
                                    private b;
                                    private u;
                                    constructor(initialSize: number);
                                    decompose(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                    inputModified(): boolean;
                                    getQH(): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    getH(H: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    getQ(Q: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    private _decompose();
                                    getGammas(): Float64Array;
                                }
                                class QRDecompositionHouseholderColumn_D64 {
                                    dataQR: org.kevoree.modeling.util.maths.structure.KArray2D;
                                    v: Float64Array;
                                    numCols: number;
                                    numRows: number;
                                    minLength: number;
                                    gammas: Float64Array;
                                    gamma: number;
                                    tau: number;
                                    error: boolean;
                                    setExpectedMaxSize(numRows: number, numCols: number): void;
                                    getQ(Q: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, compact: boolean): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    getR(R: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, compact: boolean): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    decompose(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                    convertToColumnMajor(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                    householder(j: number): void;
                                    updateA(w: number): void;
                                    static findMax(u: org.kevoree.modeling.util.maths.structure.KArray2D, col: number, startU: number, length: number): number;
                                    static divideElements(j: number, numRows: number, u: org.kevoree.modeling.util.maths.structure.KArray2D, col: number, u_0: number): void;
                                    static computeTauAndDivide(j: number, numRows: number, u: org.kevoree.modeling.util.maths.structure.KArray2D, col: number, max: number): number;
                                    inputModified(): boolean;
                                    static rank1UpdateMultR(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, u: org.kevoree.modeling.util.maths.structure.KArray2D, col: number, gamma: number, colA0: number, w0: number, w1: number, _temp: Float64Array): void;
                                }
                                class QRxColPivDecompositionHouseholderColumn_D64 extends org.kevoree.modeling.util.maths.matrix.solvers.decomposition.QRDecompositionHouseholderColumn_D64 {
                                    pivots: Int32Array;
                                    normsCol: Float64Array;
                                    maxAbs: number;
                                    singularThreshold: number;
                                    rank: number;
                                    constructor();
                                    setSingularThreshold(threshold: number): void;
                                    setExpectedMaxSize(numRows: number, numCols: number): void;
                                    getQ(Q: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, compact: boolean): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    decompose(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                    private setupPivotInfo();
                                    private updateNorms(j);
                                    private swapColumns(j);
                                    householderPivot(j: number): boolean;
                                    getRank(): number;
                                    getPivots(): Int32Array;
                                    getPivotMatrix(P: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                }
                                class QrHelperFunctions_D64 {
                                    static findMax(u: Float64Array, startU: number, length: number): number;
                                    static findMaxArray(u: org.kevoree.modeling.util.maths.structure.KArray2D, col: number, startU: number, length: number): number;
                                    static divideElements4arg(j: number, numRows: number, u: Float64Array, u_0: number): void;
                                    static divideElements4argArray(j: number, numRows: number, u: org.kevoree.modeling.util.maths.structure.KArray2D, col: number, u_0: number): void;
                                    static divideElements(j: number, numRows: number, u: Float64Array, startU: number, u_0: number): void;
                                    static divideElements_Brow(j: number, numRows: number, u: Float64Array, b: Float64Array, startB: number, u_0: number): void;
                                    static divideElements_Bcol(j: number, numRows: number, numCols: number, u: Float64Array, b: Float64Array, startB: number, u_0: number): void;
                                    static computeTauAndDivide(j: number, numRows: number, u: Float64Array, startU: number, max: number): number;
                                    static computeTauAndDivide4arg(j: number, numRows: number, u: Float64Array, max: number): number;
                                    static computeTauAndDivide4argArray(j: number, numRows: number, u: org.kevoree.modeling.util.maths.structure.KArray2D, col: number, max: number): number;
                                    static rank1UpdateMultR(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, u: Float64Array, gamma: number, colA0: number, w0: number, w1: number, _temp: Float64Array): void;
                                    static rank1UpdateMultRArray(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, u: org.kevoree.modeling.util.maths.structure.KArray2D, col: number, gamma: number, colA0: number, w0: number, w1: number, _temp: Float64Array): void;
                                    static rank1UpdateMultR8param(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, u: Float64Array, offsetU: number, gamma: number, colA0: number, w0: number, w1: number, _temp: Float64Array): void;
                                    static rank1UpdateMultL(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, u: Float64Array, gamma: number, colA0: number, w0: number, w1: number): void;
                                }
                                class SwitchingEigenDecomposition {
                                    private tol;
                                    symmetricAlg: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.SymmetricQRAlgorithmDecomposition_D64;
                                    generalAlg: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.WatchedDoubleStepQRDecomposition_D64;
                                    symmetric: boolean;
                                    computeVectors: boolean;
                                    A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    constructor(matrixSize: number, computeVectors: boolean, tol: number);
                                    getNumberOfEigenvalues(): number;
                                    getEigenvalue(index: number): org.kevoree.modeling.util.maths.matrix.Complex64F;
                                    getEigenVector(index: number): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    decompose(orig: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                    inputModified(): boolean;
                                }
                                class SymmetricQRAlgorithmDecomposition_D64 {
                                    private decomp;
                                    private helper;
                                    private vector;
                                    private computeVectorsWithValues;
                                    private values;
                                    private diag;
                                    private off;
                                    private diagSaved;
                                    private offSaved;
                                    private V;
                                    private eigenvectors;
                                    computeVectors: boolean;
                                    constructor(decomp: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.TridiagonalDecompositionHouseholder_D64, computeVectors: boolean);
                                    setComputeVectorsWithValues(computeVectorsWithValues: boolean): void;
                                    setMaxIterations(max: number): void;
                                    getNumberOfEigenvalues(): number;
                                    getEigenvalue(index: number): org.kevoree.modeling.util.maths.matrix.Complex64F;
                                    getEigenVector(index: number): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    decompose(orig: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                    inputModified(): boolean;
                                    private extractTogether();
                                    private extractSeparate(numCols);
                                    private computeEigenValues();
                                }
                                class SymmetricQREigenHelper {
                                    rand: java.util.Random;
                                    steps: number;
                                    numExceptional: number;
                                    lastExceptional: number;
                                    eigenSmall: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.EigenvalueSmall;
                                    Q: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    N: number;
                                    diag: Float64Array;
                                    off: Float64Array;
                                    x1: number;
                                    x2: number;
                                    splits: Int32Array;
                                    numSplits: number;
                                    private bulge;
                                    private c;
                                    private s;
                                    private c2;
                                    private s2;
                                    private cs;
                                    constructor();
                                    setQ(q: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                    incrementSteps(): void;
                                    init(diag: Float64Array, off: Float64Array, numCols: number): void;
                                    swapDiag(diag: Float64Array): Float64Array;
                                    swapOff(off: Float64Array): Float64Array;
                                    reset(N: number): void;
                                    copyDiag(ret: Float64Array): Float64Array;
                                    copyOff(ret: Float64Array): Float64Array;
                                    copyEigenvalues(ret: Float64Array): Float64Array;
                                    setSubmatrix(x1: number, x2: number): void;
                                    isZero(index: number): boolean;
                                    performImplicitSingleStep(lambda: number, byAngle: boolean): void;
                                    updateQ(m: number, n: number, c: number, s: number): void;
                                    createBulge(x1: number, p: number, byAngle: boolean): void;
                                    createBulge2by2(x1: number, p: number, byAngle: boolean): void;
                                    private computeRotation(run, rise);
                                    removeBulge(x1: number): void;
                                    removeBulgeEnd(x1: number): void;
                                    eigenvalue2by2(x1: number): void;
                                    exceptionalShift(): void;
                                    nextSplit(): boolean;
                                    computeShift(): number;
                                    computeWilkinsonShift(): number;
                                    getMatrixSize(): number;
                                    resetSteps(): void;
                                }
                                class SymmetricQrAlgorithm {
                                    private helper;
                                    private Q;
                                    private eigenvalues;
                                    private exceptionalThresh;
                                    private maxIterations;
                                    private fastEigenvalues;
                                    private followingScript;
                                    constructor(helper: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.SymmetricQREigenHelper);
                                    setMaxIterations(maxIterations: number): void;
                                    getQ(): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    setQ(q: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                    setFastEigenvalues(fastEigenvalues: boolean): void;
                                    getEigenvalue(index: number): number;
                                    getNumberOfEigenvalues(): number;
                                    process(sideLength: number, diag: Float64Array, off: Float64Array, eigenvalues: Float64Array): boolean;
                                    process3arg(sideLength: number, diag: Float64Array, off: Float64Array): boolean;
                                    private _process();
                                    performStep(): void;
                                }
                                class TridiagonalDecompositionHouseholder_D64 {
                                    private QT;
                                    private N;
                                    private w;
                                    private gammas;
                                    private b;
                                    constructor();
                                    getQT(): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    getDiagonal(diag: Float64Array, off: Float64Array): void;
                                    getT(T: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    getQ(Q: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, transposed: boolean): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    decompose(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                    private similarTransform(k);
                                    householderSymmetric(row: number, gamma: number): void;
                                    init(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                    inputModified(): boolean;
                                }
                                class WatchedDoubleStepQRDecomposition_D64 {
                                    hessenberg: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.HessenbergSimilarDecomposition_D64;
                                    algValue: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.WatchedDoubleStepQREigenvalue;
                                    algVector: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.WatchedDoubleStepQREigenvector;
                                    H: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    computeVectors: boolean;
                                    constructor(computeVectors: boolean);
                                    decompose(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                    inputModified(): boolean;
                                    getNumberOfEigenvalues(): number;
                                    getEigenvalue(index: number): org.kevoree.modeling.util.maths.matrix.Complex64F;
                                    getEigenVector(index: number): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                }
                                class WatchedDoubleStepQREigen {
                                    private rand;
                                    private N;
                                    A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    private u;
                                    private gamma;
                                    private _temp;
                                    numStepsFind: Int32Array;
                                    steps: number;
                                    eigenvalues: org.kevoree.modeling.util.maths.matrix.Complex64F[];
                                    numEigen: number;
                                    private valueSmall;
                                    private temp;
                                    private printHumps;
                                    checkHessenberg: boolean;
                                    private checkOrthogonal;
                                    private checkUncountable;
                                    private useStandardEq;
                                    private useCareful2x2;
                                    private normalize;
                                    lastExceptional: number;
                                    numExceptional: number;
                                    exceptionalThreshold: number;
                                    maxIterations: number;
                                    createR: boolean;
                                    Q: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    incrementSteps(): void;
                                    setQ(Q: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                    private addEigenvalue(v);
                                    private addEigenvalue2arg(v, i);
                                    setChecks(hessenberg: boolean, orthogonal: boolean, uncountable: boolean): void;
                                    isZero(x1: number, x2: number): boolean;
                                    setup(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                    exceptionalShift(x1: number, x2: number): void;
                                    implicitDoubleStep(x1: number, x2: number): void;
                                    performImplicitDoubleStep(x1: number, x2: number, real: number, img: number): void;
                                    private performImplicitDoubleStep5arg(x1, x2, b11, b21, b31);
                                    performImplicitSingleStep(x1: number, x2: number, eigenvalue: number): void;
                                    createBulgeSingleStep(x1: number, eigenvalue: number): boolean;
                                    bulgeDoubleStepQn(i: number): boolean;
                                    bulgeDoubleStepQn6arg(i: number, a11: number, a21: number, a31: number, threshold: number, set: boolean): boolean;
                                    bulgeSingleStepQn(i: number): boolean;
                                    bulgeSingleStepQn5arg(i: number, a11: number, a21: number, threshold: number, set: boolean): boolean;
                                    eigen2by2_scale(a11: number, a12: number, a21: number, a22: number): void;
                                    getNumberOfEigenvalues(): number;
                                    getEigenvalues(): org.kevoree.modeling.util.maths.matrix.Complex64F[];
                                    addComputedEigen2x2(x1: number, x2: number): void;
                                    isReal2x2(x1: number, x2: number): boolean;
                                    addEigenAt(x1: number): void;
                                    printSteps(): void;
                                }
                                class WatchedDoubleStepQREigenvalue {
                                    implicitQR: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.WatchedDoubleStepQREigen;
                                    splits: Int32Array;
                                    numSplits: number;
                                    x1: number;
                                    x2: number;
                                    constructor();
                                    setup(A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): void;
                                    process(origA: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                    private moveToNextSplit();
                                    private performIteration();
                                    getNumberOfEigenvalues(): number;
                                    getEigenvalues(): org.kevoree.modeling.util.maths.matrix.Complex64F[];
                                    getImplicitQR(): org.kevoree.modeling.util.maths.matrix.solvers.decomposition.WatchedDoubleStepQREigen;
                                }
                                class WatchedDoubleStepQREigenvector {
                                    implicit: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.WatchedDoubleStepQREigen;
                                    Q: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    eigenvectors: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F[];
                                    eigenvectorTemp: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    solver: org.kevoree.modeling.util.maths.matrix.solvers.LinearSolverLu_D64;
                                    origEigenvalues: org.kevoree.modeling.util.maths.matrix.Complex64F[];
                                    N: number;
                                    splits: Int32Array;
                                    numSplits: number;
                                    x1: number;
                                    x2: number;
                                    indexVal: number;
                                    onscript: boolean;
                                    process(implicit: org.kevoree.modeling.util.maths.matrix.solvers.decomposition.WatchedDoubleStepQREigen, A: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F, Q_h: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                    extractVectors(Q_h: org.kevoree.modeling.util.maths.matrix.DenseMatrix64F): boolean;
                                    private solveEigenvectorDuplicateEigenvalue(real, first, isTriangle);
                                    private solveUsingTriangle(real, index, r);
                                    private solveWithLU(real, index, r);
                                    findQandR(): boolean;
                                    private findNextEigenvalue();
                                    private checkSplitPerformImplicit();
                                    private moveToNextSplit();
                                    getQ(): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F;
                                    getImplicit(): org.kevoree.modeling.util.maths.matrix.solvers.decomposition.WatchedDoubleStepQREigen;
                                    getEigenvectors(): org.kevoree.modeling.util.maths.matrix.DenseMatrix64F[];
                                    getEigenvalues(): org.kevoree.modeling.util.maths.matrix.Complex64F[];
                                }
                            }
                        }
                    }
                    module structure {
                        interface KArray1D {
                            size(): number;
                            get(index: number): number;
                            set(index: number, value: number): number;
                            add(index: number, value: number): number;
                            addAll(value: number): void;
                            setAll(value: number): void;
                            addElement(index: number, numElem: number): void;
                            clone(): org.kevoree.modeling.util.maths.structure.KArray1D;
                            data(): Float64Array;
                            setData(data: Float64Array): void;
                        }
                        interface KArray2D {
                            rows(): number;
                            columns(): number;
                            get(rowIndex: number, columnIndex: number): number;
                            set(rowIndex: number, columnIndex: number, value: number): number;
                            add(rowIndex: number, columnIndex: number, value: number): number;
                            setAll(value: number): void;
                            addRow(rowindex: number, numRow: number): void;
                            addCol(colIndex: number, numCol: number): void;
                            getAtIndex(index: number): number;
                            setAtIndex(index: number, value: number): number;
                            addAtIndex(index: number, value: number): number;
                            clone(): org.kevoree.modeling.util.maths.structure.KArray2D;
                            data(): Float64Array;
                            setData(data: Float64Array): void;
                        }
                        module blas {
                            interface KBlas {
                                dgemm(transA: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, transB: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, m: number, n: number, k: number, alpha: number, matA: Float64Array, offsetA: number, ldA: number, matB: Float64Array, offsetB: number, ldB: number, beta: number, matC: Float64Array, offsetC: number, ldC: number): void;
                                dgetrs(transA: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, dim: number, nrhs: number, matA: Float64Array, offsetA: number, ldA: number, ipiv: Int32Array, offsetIpiv: number, matB: Float64Array, offsetB: number, ldB: number, info: Int32Array): void;
                                dgetri(dim: number, matA: Float64Array, offsetA: number, ldA: number, ipiv: Int32Array, offsetIpiv: number, work: Float64Array, offsetWork: number, ldWork: number, info: Int32Array): void;
                                dgetrf(rows: number, columns: number, matA: Float64Array, offsetA: number, ldA: number, ipiv: Int32Array, offsetIpiv: number, info: Int32Array): void;
                                dorgqr(m: number, n: number, k: number, matA: Float64Array, offsetA: number, ldA: number, taw: Float64Array, offsetTaw: number, work: Float64Array, offsetWork: number, lWork: number, info: Int32Array): void;
                                dgeqrf(m: number, n: number, matA: Float64Array, offsetA: number, ldA: number, taw: Float64Array, offsetTaw: number, work: Float64Array, offsetwork: number, lWork: number, info: Int32Array): void;
                                shutdown(): void;
                            }
                            class KBlasDirectionType {
                                static FORWARD: KBlasDirectionType;
                                static BACKWARD: KBlasDirectionType;
                                equals(other: any): boolean;
                                static _KBlasDirectionTypeVALUES: KBlasDirectionType[];
                                static values(): KBlasDirectionType[];
                            }
                            class KBlasMajorType {
                                static COLUMNWISE: KBlasMajorType;
                                static ROWWISE: KBlasMajorType;
                                equals(other: any): boolean;
                                static _KBlasMajorTypeVALUES: KBlasMajorType[];
                                static values(): KBlasMajorType[];
                            }
                            class KBlasOrientationType {
                                static UPPER: KBlasOrientationType;
                                static LOWER: KBlasOrientationType;
                                equals(other: any): boolean;
                                static _KBlasOrientationTypeVALUES: KBlasOrientationType[];
                                static values(): KBlasOrientationType[];
                            }
                            class KBlasSideType {
                                static LEFT: KBlasSideType;
                                static RIGHT: KBlasSideType;
                                equals(other: any): boolean;
                                static _KBlasSideTypeVALUES: KBlasSideType[];
                                static values(): KBlasSideType[];
                            }
                            class KBlasTransposeType {
                                static NOTRANSPOSE: KBlasTransposeType;
                                static TRANSPOSE: KBlasTransposeType;
                                static CONJUGATE: KBlasTransposeType;
                                equals(other: any): boolean;
                                static _KBlasTransposeTypeVALUES: KBlasTransposeType[];
                                static values(): KBlasTransposeType[];
                            }
                            class KBlasUnitType {
                                static UNIT: KBlasUnitType;
                                static NONUNIT: KBlasUnitType;
                                equals(other: any): boolean;
                                static _KBlasUnitTypeVALUES: KBlasUnitType[];
                                static values(): KBlasUnitType[];
                            }
                            module impl {
                                class JavaBlas implements org.kevoree.modeling.util.maths.structure.blas.KBlas {
                                    dgemm(paramString1: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, paramString2: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, paramInt1: number, paramInt2: number, paramInt3: number, paramDouble1: number, paramArrayOfDouble1: Float64Array, paramInt4: number, paramInt5: number, paramArrayOfDouble2: Float64Array, paramInt6: number, paramInt7: number, paramDouble2: number, paramArrayOfDouble3: Float64Array, paramInt8: number, paramInt9: number): void;
                                    dgetri(paramInt1: number, paramArrayOfDouble1: Float64Array, paramInt2: number, paramInt3: number, paramArrayOfInt: Int32Array, paramInt4: number, paramArrayOfDouble2: Float64Array, paramInt5: number, paramInt6: number, paramintW: Int32Array): void;
                                    dgetrf(paramInt1: number, paramInt2: number, paramArrayOfDouble: Float64Array, paramInt3: number, paramInt4: number, paramArrayOfInt: Int32Array, paramInt5: number, info: Int32Array): void;
                                    dgetrs(trans: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, nOrder: number, nrhs: number, matA: Float64Array, offsetA: number, ldA: number, ipiv: Int32Array, offsetIpiV: number, matB: Float64Array, offsetB: number, ldB: number, info: Int32Array): void;
                                    dorgqr(paramInt1: number, paramInt2: number, paramInt3: number, paramArrayOfDouble1: Float64Array, paramInt4: number, paramInt5: number, paramArrayOfDouble2: Float64Array, paramInt6: number, paramArrayOfDouble3: Float64Array, paramInt7: number, paramInt8: number, paramintW: Int32Array): void;
                                    dgeqrf(paramInt1: number, paramInt2: number, paramArrayOfDouble1: Float64Array, paramInt3: number, paramInt4: number, paramArrayOfDouble2: Float64Array, paramInt5: number, paramArrayOfDouble3: Float64Array, paramInt6: number, paramInt7: number, paramintW: Int32Array): void;
                                    dorg2r(paramInt1: number, paramInt2: number, paramInt3: number, paramArrayOfDouble1: Float64Array, paramInt4: number, paramInt5: number, paramArrayOfDouble2: Float64Array, paramInt6: number, paramArrayOfDouble3: Float64Array, paramInt7: number, paramintW: Int32Array): void;
                                    dlarfb(paramString1: org.kevoree.modeling.util.maths.structure.blas.KBlasSideType, paramString2: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, paramString3: org.kevoree.modeling.util.maths.structure.blas.KBlasDirectionType, paramString4: org.kevoree.modeling.util.maths.structure.blas.KBlasMajorType, paramInt1: number, paramInt2: number, paramInt3: number, paramArrayOfDouble1: Float64Array, paramInt4: number, paramInt5: number, paramArrayOfDouble2: Float64Array, paramInt6: number, paramInt7: number, paramArrayOfDouble3: Float64Array, paramInt8: number, paramInt9: number, paramArrayOfDouble4: Float64Array, paramInt10: number, paramInt11: number): void;
                                    dcopy(n: number, x: Float64Array, offsetx: number, incx: number, y: Float64Array, offsety: number, incy: number): void;
                                    dlarft(paramString1: org.kevoree.modeling.util.maths.structure.blas.KBlasDirectionType, paramString2: org.kevoree.modeling.util.maths.structure.blas.KBlasMajorType, paramInt1: number, paramInt2: number, paramArrayOfDouble1: Float64Array, paramInt3: number, paramInt4: number, paramArrayOfDouble2: Float64Array, paramInt5: number, paramArrayOfDouble3: Float64Array, paramInt6: number, paramInt7: number): void;
                                    dgeqr2(paramInt1: number, paramInt2: number, paramArrayOfDouble1: Float64Array, paramInt3: number, paramInt4: number, paramArrayOfDouble2: Float64Array, paramInt5: number, paramArrayOfDouble3: Float64Array, paramInt6: number, paramintW: Int32Array): void;
                                    private dlarfg_adapter(paramInt1, paramArrayOfDouble1, paramInt2, paramArrayOfDouble2, paramInt3, paramInt4, paramArrayOfDouble3, paramInt5);
                                    dlarf(paramString: org.kevoree.modeling.util.maths.structure.blas.KBlasSideType, paramInt1: number, paramInt2: number, paramArrayOfDouble1: Float64Array, paramInt3: number, paramInt4: number, paramDouble: number, paramArrayOfDouble2: Float64Array, paramInt5: number, paramInt6: number, paramArrayOfDouble3: Float64Array, paramInt7: number): void;
                                    dnrm2(paramInt1: number, paramArrayOfDouble: Float64Array, paramInt2: number, paramInt3: number): number;
                                    dlapy2(paramDouble1: number, paramDouble2: number): number;
                                    private dsign(paramDouble1, paramDouble2);
                                    dlarfg(paramInt1: number, paramdoubleW1: Float64Array, paramArrayOfDouble: Float64Array, paramInt2: number, paramInt3: number, paramdoubleW2: Float64Array): void;
                                    shutdown(): void;
                                    dtrti2(paramString1: org.kevoree.modeling.util.maths.structure.blas.KBlasOrientationType, paramString2: org.kevoree.modeling.util.maths.structure.blas.KBlasUnitType, paramInt1: number, paramArrayOfDouble: Float64Array, paramInt2: number, paramInt3: number, paramintW: Int32Array): void;
                                    private print(paramArrayOfDouble, s);
                                    dtrmv(paramString1: org.kevoree.modeling.util.maths.structure.blas.KBlasOrientationType, paramString2: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, paramString3: org.kevoree.modeling.util.maths.structure.blas.KBlasUnitType, paramInt1: number, paramArrayOfDouble1: Float64Array, paramInt2: number, paramInt3: number, paramArrayOfDouble2: Float64Array, paramInt4: number, paramInt5: number): void;
                                    dtrmm(paramString1: org.kevoree.modeling.util.maths.structure.blas.KBlasSideType, paramString2: org.kevoree.modeling.util.maths.structure.blas.KBlasOrientationType, paramString3: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, paramString4: org.kevoree.modeling.util.maths.structure.blas.KBlasUnitType, paramInt1: number, paramInt2: number, paramDouble: number, paramArrayOfDouble1: Float64Array, paramInt3: number, paramInt4: number, paramArrayOfDouble2: Float64Array, paramInt5: number, paramInt6: number): void;
                                    dtrtri(paramString1: org.kevoree.modeling.util.maths.structure.blas.KBlasOrientationType, paramString2: org.kevoree.modeling.util.maths.structure.blas.KBlasUnitType, paramInt1: number, paramArrayOfDouble: Float64Array, paramInt2: number, paramInt3: number, paramintW: Int32Array): void;
                                    dgemv(paramString: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, paramInt1: number, paramInt2: number, paramDouble1: number, paramArrayOfDouble1: Float64Array, paramInt3: number, paramInt4: number, paramArrayOfDouble2: Float64Array, paramInt5: number, paramInt6: number, paramDouble2: number, paramArrayOfDouble3: Float64Array, paramInt7: number, paramInt8: number): void;
                                    private ilaenv(i, dgetrf, s, paramInt1, paramInt2, i1, i2);
                                    dger(paramInt1: number, paramInt2: number, paramDouble: number, paramArrayOfDouble1: Float64Array, paramInt3: number, paramInt4: number, paramArrayOfDouble2: Float64Array, paramInt5: number, paramInt6: number, paramArrayOfDouble3: Float64Array, paramInt7: number, paramInt8: number): void;
                                    idamax(paramInt1: number, paramArrayOfDouble: Float64Array, paramInt2: number, paramInt3: number): number;
                                    dswap(paramInt1: number, paramArrayOfDouble1: Float64Array, paramInt2: number, paramInt3: number, paramArrayOfDouble2: Float64Array, paramInt4: number, paramInt5: number): void;
                                    dscal(paramInt1: number, paramDouble: number, paramArrayOfDouble: Float64Array, paramInt2: number, paramInt3: number): void;
                                    dgetf2(paramInt1: number, paramInt2: number, paramArrayOfDouble: Float64Array, paramInt3: number, paramInt4: number, paramArrayOfInt: Int32Array, paramInt5: number, info: Int32Array): void;
                                    dlaswp(paramInt1: number, paramArrayOfDouble: Float64Array, paramInt2: number, paramInt3: number, paramInt4: number, paramInt5: number, paramArrayOfInt: Int32Array, paramInt6: number, paramInt7: number): void;
                                    dtrsm(paramString1: org.kevoree.modeling.util.maths.structure.blas.KBlasSideType, paramString2: org.kevoree.modeling.util.maths.structure.blas.KBlasOrientationType, paramString3: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, paramString4: org.kevoree.modeling.util.maths.structure.blas.KBlasUnitType, paramInt1: number, paramInt2: number, paramDouble: number, paramArrayOfDouble1: Float64Array, paramInt3: number, paramInt4: number, paramArrayOfDouble2: Float64Array, paramInt5: number, paramInt6: number): void;
                                    private floorDiv(x, y);
                                }
                            }
                        }
                        module impl {
                            class Array1D implements org.kevoree.modeling.util.maths.structure.KArray1D {
                                private _size;
                                private _offset;
                                private _segmentIndex;
                                private _segment;
                                private _metaClass;
                                constructor(p_size: number, p_offset: number, p_segmentIndex: number, p_segment: org.kevoree.modeling.memory.chunk.KObjectChunk, p_metaClass: org.kevoree.modeling.meta.KMetaClass);
                                size(): number;
                                get(p_index: number): number;
                                set(p_index: number, p_value: number): number;
                                add(index: number, value: number): number;
                                addAll(value: number): void;
                                setAll(value: number): void;
                                addElement(index: number, numElem: number): void;
                                clone(): org.kevoree.modeling.util.maths.structure.KArray1D;
                                data(): Float64Array;
                                setData(data: Float64Array): void;
                            }
                            class Array2D implements org.kevoree.modeling.util.maths.structure.KArray2D {
                                private _nbRows;
                                private _nbColumns;
                                private _offset;
                                private _segmentIndex;
                                private _segment;
                                private _metaClass;
                                constructor(p_nbRows: number, p_nbColumns: number, p_offset: number, p_segmentIndex: number, p_segment: org.kevoree.modeling.memory.chunk.KObjectChunk, p_metaClass: org.kevoree.modeling.meta.KMetaClass);
                                rows(): number;
                                columns(): number;
                                private getIndex(p_rowIndex, p_columnIndex);
                                get(p_rowIndex: number, p_columnIndex: number): number;
                                set(p_rowIndex: number, p_columnIndex: number, value: number): number;
                                add(rowIndex: number, columnIndex: number, value: number): number;
                                setAll(value: number): void;
                                addRow(rowindex: number, numRow: number): void;
                                addCol(colIndex: number, numCol: number): void;
                                clone(): org.kevoree.modeling.util.maths.structure.KArray2D;
                                data(): Float64Array;
                                setData(p_data: Float64Array): void;
                                getAtIndex(index: number): number;
                                setAtIndex(index: number, value: number): number;
                                addAtIndex(index: number, value: number): number;
                            }
                            class NativeArray2D implements org.kevoree.modeling.util.maths.structure.KArray2D {
                                private _nbRows;
                                private _nbColumns;
                                private _back;
                                constructor(p_nbRows: number, p_nbColumns: number);
                                private getIndex(p_rowIndex, p_columnIndex);
                                rows(): number;
                                columns(): number;
                                get(p_rowIndex: number, p_columnIndex: number): number;
                                set(p_rowIndex: number, p_columnIndex: number, value: number): number;
                                add(rowIndex: number, columnIndex: number, value: number): number;
                                setAll(value: number): void;
                                addRow(rowindex: number, numRow: number): void;
                                addCol(colIndex: number, numCol: number): void;
                                clone(): org.kevoree.modeling.util.maths.structure.KArray2D;
                                data(): Float64Array;
                                setData(data: Float64Array): void;
                                getAtIndex(index: number): number;
                                setAtIndex(index: number, value: number): number;
                                addAtIndex(index: number, value: number): number;
                            }
                        }
                        module matrix {
                            class MatrixOperations {
                                static BLOCK_WIDTH: number;
                                static TRANSPOSE_SWITCH: number;
                                static leadingDimension(matA: org.kevoree.modeling.util.maths.structure.KArray2D): number;
                                static multiply(matA: org.kevoree.modeling.util.maths.structure.KArray2D, matB: org.kevoree.modeling.util.maths.structure.KArray2D, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): org.kevoree.modeling.util.maths.structure.KArray2D;
                                static multiplyTransposeAlpha(transA: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, transB: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, matA: org.kevoree.modeling.util.maths.structure.KArray2D, matB: org.kevoree.modeling.util.maths.structure.KArray2D, alpha: number, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): org.kevoree.modeling.util.maths.structure.KArray2D;
                                static multiplyAlphaBetaResult(alpha: number, matA: org.kevoree.modeling.util.maths.structure.KArray2D, matB: org.kevoree.modeling.util.maths.structure.KArray2D, beta: number, matC: org.kevoree.modeling.util.maths.structure.KArray2D, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): void;
                                static multiplyTransposeAlphaBetaResult(transA: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, transB: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, alpha: number, matA: org.kevoree.modeling.util.maths.structure.KArray2D, matB: org.kevoree.modeling.util.maths.structure.KArray2D, beta: number, matC: org.kevoree.modeling.util.maths.structure.KArray2D, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): void;
                                static testDimensionsABC(transA: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, transB: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, matA: org.kevoree.modeling.util.maths.structure.KArray2D, matB: org.kevoree.modeling.util.maths.structure.KArray2D, matC: org.kevoree.modeling.util.maths.structure.KArray2D): boolean;
                                static testDimensionsAB(transA: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, transB: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, matA: org.kevoree.modeling.util.maths.structure.KArray2D, matB: org.kevoree.modeling.util.maths.structure.KArray2D): boolean;
                                static initMatrice(matA: org.kevoree.modeling.util.maths.structure.KArray2D, random: boolean): void;
                                static random(rows: number, columns: number): org.kevoree.modeling.util.maths.structure.KArray2D;
                                static invert(mat: org.kevoree.modeling.util.maths.structure.KArray2D, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): org.kevoree.modeling.util.maths.structure.KArray2D;
                                static invertInPlace(mat: org.kevoree.modeling.util.maths.structure.KArray2D, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): boolean;
                                static scale(alpha: number, matA: org.kevoree.modeling.util.maths.structure.KArray2D): void;
                                static transpose(matA: org.kevoree.modeling.util.maths.structure.KArray2D): org.kevoree.modeling.util.maths.structure.KArray2D;
                                private static transposeSquare(matA, result);
                                private static transposeStandard(matA, result);
                                private static transposeBlock(matA, result);
                                static createIdentity(width: number): org.kevoree.modeling.util.maths.structure.KArray2D;
                                static solve(matA: org.kevoree.modeling.util.maths.structure.KArray2D, matB: org.kevoree.modeling.util.maths.structure.KArray2D, workInPlace: boolean, transB: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): org.kevoree.modeling.util.maths.structure.KArray2D;
                                static compareMatrix(matA: org.kevoree.modeling.util.maths.structure.KArray2D, matB: org.kevoree.modeling.util.maths.structure.KArray2D): number;
                            }
                            module solver {
                                class LU {
                                    private LU;
                                    private piv;
                                    private singular;
                                    getLU(): org.kevoree.modeling.util.maths.structure.KArray2D;
                                    constructor(m: number, n: number);
                                    static factorize(A: org.kevoree.modeling.util.maths.structure.KArray2D, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): org.kevoree.modeling.util.maths.structure.matrix.solver.LU;
                                    factor(A: org.kevoree.modeling.util.maths.structure.KArray2D, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): org.kevoree.modeling.util.maths.structure.matrix.solver.LU;
                                    getLower(): org.kevoree.modeling.util.maths.structure.KArray2D;
                                    getUpper(): org.kevoree.modeling.util.maths.structure.KArray2D;
                                    getPivots(): Int32Array;
                                    isSingular(): boolean;
                                    solve(B: org.kevoree.modeling.util.maths.structure.KArray2D, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): org.kevoree.modeling.util.maths.structure.KArray2D;
                                    transSolve(B: org.kevoree.modeling.util.maths.structure.KArray2D, trans: org.kevoree.modeling.util.maths.structure.blas.KBlasTransposeType, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): org.kevoree.modeling.util.maths.structure.KArray2D;
                                    invert(A: org.kevoree.modeling.util.maths.structure.KArray2D, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): boolean;
                                }
                                class QR {
                                    private Q;
                                    private R;
                                    m: number;
                                    n: number;
                                    k: number;
                                    work: Float64Array;
                                    workGen: Float64Array;
                                    tau: Float64Array;
                                    constructor(rows: number, columns: number);
                                    static factorize(A: org.kevoree.modeling.util.maths.structure.KArray2D, workInPlace: boolean, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): org.kevoree.modeling.util.maths.structure.matrix.solver.QR;
                                    factor(matA: org.kevoree.modeling.util.maths.structure.KArray2D, workInPlace: boolean, blas: org.kevoree.modeling.util.maths.structure.blas.KBlas): org.kevoree.modeling.util.maths.structure.matrix.solver.QR;
                                    getR(): org.kevoree.modeling.util.maths.structure.KArray2D;
                                    getQ(): org.kevoree.modeling.util.maths.structure.KArray2D;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
declare module model {
    interface BinarySearchTree extends org.kevoree.modeling.KObject {
        addRoot(p_obj: model.Node): model.BinarySearchTree;
        removeRoot(p_obj: model.Node): model.BinarySearchTree;
        getRoot(cb: org.kevoree.modeling.KCallback<model.Node[]>): void;
        sizeOfRoot(): number;
    }
    interface Customer extends org.kevoree.modeling.KObject {
        getPassword(): string;
        setPassword(p_obj: string): model.Customer;
        getBalance(): string;
        setBalance(p_obj: string): model.Customer;
        getCardnumber(): string;
        setCardnumber(p_obj: string): model.Customer;
        getEmail(): string;
        setEmail(p_obj: string): model.Customer;
        getUsername(): string;
        setUsername(p_obj: string): model.Customer;
    }
    class ModelModel extends org.kevoree.modeling.abs.AbstractKModel<model.ModelUniverse> {
        private _metaModel;
        constructor(p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager);
        internalCreateUniverse(key: number): model.ModelUniverse;
        metaModel(): org.kevoree.modeling.meta.KMetaModel;
        internalCreateObject(universe: number, time: number, uuid: number, p_clazz: org.kevoree.modeling.meta.KMetaClass, previousUniverse: number, previousTime: number): org.kevoree.modeling.KObject;
        createBinarySearchTree(universe: number, time: number): model.BinarySearchTree;
        createCustomer(universe: number, time: number): model.Customer;
        createNode(universe: number, time: number): model.Node;
    }
    class ModelUniverse extends org.kevoree.modeling.abs.AbstractKUniverse<model.ModelView, model.ModelUniverse> {
        constructor(p_key: number, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager);
        internal_create(timePoint: number): model.ModelView;
    }
    interface ModelView extends org.kevoree.modeling.KView {
        createBinarySearchTree(): model.BinarySearchTree;
        createCustomer(): model.Customer;
        createNode(): model.Node;
    }
    interface Node extends org.kevoree.modeling.KObject {
        getCypher(): string;
        setCypher(p_obj: string): model.Node;
        getPlain(): string;
        setPlain(p_obj: string): model.Node;
        addLeft(p_obj: model.Node): model.Node;
        removeLeft(p_obj: model.Node): model.Node;
        getLeft(cb: org.kevoree.modeling.KCallback<model.Node[]>): void;
        sizeOfLeft(): number;
        addRight(p_obj: model.Node): model.Node;
        removeRight(p_obj: model.Node): model.Node;
        getRight(cb: org.kevoree.modeling.KCallback<model.Node[]>): void;
        sizeOfRight(): number;
    }
    module impl {
        class BinarySearchTreeImpl extends org.kevoree.modeling.abs.AbstractKObject implements model.BinarySearchTree {
            constructor(p_universe: number, p_time: number, p_uuid: number, p_metaClass: org.kevoree.modeling.meta.KMetaClass, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager, p_previousUniverse: number, p_previoustTime: number);
            addRoot(p_obj: model.Node): model.BinarySearchTree;
            removeRoot(p_obj: model.Node): model.BinarySearchTree;
            getRoot(cb: org.kevoree.modeling.KCallback<model.Node[]>): void;
            sizeOfRoot(): number;
        }
        class CustomerImpl extends org.kevoree.modeling.abs.AbstractKObject implements model.Customer {
            constructor(p_universe: number, p_time: number, p_uuid: number, p_metaClass: org.kevoree.modeling.meta.KMetaClass, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager, p_previousUniverse: number, p_previoustTime: number);
            getPassword(): string;
            setPassword(p_obj: string): model.Customer;
            getBalance(): string;
            setBalance(p_obj: string): model.Customer;
            getCardnumber(): string;
            setCardnumber(p_obj: string): model.Customer;
            getEmail(): string;
            setEmail(p_obj: string): model.Customer;
            getUsername(): string;
            setUsername(p_obj: string): model.Customer;
        }
        class ModelViewImpl extends org.kevoree.modeling.abs.AbstractKView implements model.ModelView {
            constructor(p_universe: number, _time: number, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager);
            createBinarySearchTree(): model.BinarySearchTree;
            createCustomer(): model.Customer;
            createNode(): model.Node;
        }
        class NodeImpl extends org.kevoree.modeling.abs.AbstractKObject implements model.Node {
            constructor(p_universe: number, p_time: number, p_uuid: number, p_metaClass: org.kevoree.modeling.meta.KMetaClass, p_manager: org.kevoree.modeling.memory.manager.internal.KInternalDataManager, p_previousUniverse: number, p_previoustTime: number);
            getCypher(): string;
            setCypher(p_obj: string): model.Node;
            getPlain(): string;
            setPlain(p_obj: string): model.Node;
            addLeft(p_obj: model.Node): model.Node;
            removeLeft(p_obj: model.Node): model.Node;
            getLeft(cb: org.kevoree.modeling.KCallback<model.Node[]>): void;
            sizeOfLeft(): number;
            addRight(p_obj: model.Node): model.Node;
            removeRight(p_obj: model.Node): model.Node;
            getRight(cb: org.kevoree.modeling.KCallback<model.Node[]>): void;
            sizeOfRight(): number;
        }
    }
    module meta {
        class MetaBinarySearchTree extends org.kevoree.modeling.meta.impl.MetaClass {
            private static INSTANCE;
            static REL_ROOT: org.kevoree.modeling.meta.KMetaRelation;
            static getInstance(): model.meta.MetaBinarySearchTree;
            constructor();
        }
        class MetaCustomer extends org.kevoree.modeling.meta.impl.MetaClass {
            private static INSTANCE;
            static ATT_PASSWORD: org.kevoree.modeling.meta.KMetaAttribute;
            static ATT_BALANCE: org.kevoree.modeling.meta.KMetaAttribute;
            static ATT_CARDNUMBER: org.kevoree.modeling.meta.KMetaAttribute;
            static ATT_EMAIL: org.kevoree.modeling.meta.KMetaAttribute;
            static ATT_USERNAME: org.kevoree.modeling.meta.KMetaAttribute;
            static getInstance(): model.meta.MetaCustomer;
            constructor();
        }
        class MetaNode extends org.kevoree.modeling.meta.impl.MetaClass {
            private static INSTANCE;
            static ATT_CYPHER: org.kevoree.modeling.meta.KMetaAttribute;
            static ATT_PLAIN: org.kevoree.modeling.meta.KMetaAttribute;
            static REL_LEFT: org.kevoree.modeling.meta.KMetaRelation;
            static REL_OP_BINARYSEARCHTREE_ROOT: org.kevoree.modeling.meta.KMetaRelation;
            static REL_RIGHT: org.kevoree.modeling.meta.KMetaRelation;
            static REL_OP_NODE_LEFT: org.kevoree.modeling.meta.KMetaRelation;
            static REL_OP_NODE_RIGHT: org.kevoree.modeling.meta.KMetaRelation;
            static getInstance(): model.meta.MetaNode;
            constructor();
        }
    }
}
