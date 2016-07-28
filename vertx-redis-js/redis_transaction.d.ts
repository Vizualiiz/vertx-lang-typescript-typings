/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="../vertx-js/buffer" />

declare module "vertx-redis-js/redis_transaction" {
  export = RedisTransaction;
}

/**
 * This Interface represents a TX
 */
declare interface RedisTransaction {

  /**
   * Close the client - when it is fully closed the handler will be called.
   */
  close(handler: (res: void, err?: Throwable) => void): void;

  /**
   * Append a value to a key
   */
  append(key: string, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Authenticate to the server
   */
  auth(password: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Asynchronously rewrite the append-only file
   */
  bgrewriteaof(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Asynchronously save the dataset to disk
   */
  bgsave(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Count set bits in a string
   */
  bitcount(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Count set bits in a string
   */
  bitcountRange(key: string, start: number, end: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Perform bitwise operations between strings
   */
  bitop(operation: any, destkey: string, keys: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Find first bit set or clear in a string
   */
  bitpos(key: string, bit: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Find first bit set or clear in a string
   * <p>
   * See also bitposRange() method, which takes start, and stop offset.
   */
  bitposFrom(key: string, bit: number, start: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Find first bit set or clear in a string
   * <p>
   * Note: when both start, and stop offsets are specified,
   * behaviour is slightly different than if only start is specified
   */
  bitposRange(key: string, bit: number, start: number, stop: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove and get the first element in a list, or block until one is available
   */
  blpop(key: string, seconds: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove and get the first element in any of the lists, or block until one is available
   */
  blpopMany(keys: Array<string>, seconds: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove and get the last element in a list, or block until one is available
   */
  brpop(key: string, seconds: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove and get the last element in any of the lists, or block until one is available
   */
  brpopMany(keys: Array<string>, seconds: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Pop a value from a list, push it to another list and return it; or block until one is available
   */
  brpoplpush(key: string, destkey: string, seconds: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Kill the connection of a client
   */
  clientKill(filter: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the list of client connections
   */
  clientList(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the current connection name
   */
  clientGetname(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Stop processing commands from clients for some time
   */
  clientPause(millis: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the current connection name
   */
  clientSetname(name: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Assign new hash slots to receiving node.
   */
  clusterAddslots(slots: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the number of failure reports active for a given node.
   */
  clusterCountFailureReports(nodeId: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the number of local keys in the specified hash slot.
   */
  clusterCountkeysinslot(slot: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set hash slots as unbound in receiving node.
   */
  clusterDelslots(slot: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set hash slots as unbound in receiving node.
   */
  clusterDelslotsMany(slots: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Forces a slave to perform a manual failover of its master.
   */
  clusterFailover(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Forces a slave to perform a manual failover of its master.
   */
  clusterFailOverWithOptions(options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove a node from the nodes table.
   */
  clusterForget(nodeId: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return local key names in the specified hash slot.
   */
  clusterGetkeysinslot(slot: number, count: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Provides info about Redis Cluster node state.
   */
  clusterInfo(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Returns the hash slot of the specified key.
   */
  clusterKeyslot(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Force a node cluster to handshake with another node.
   */
  clusterMeet(ip: string, port: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get Cluster config for the node.
   */
  clusterNodes(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Reconfigure a node as a slave of the specified master node.
   */
  clusterReplicate(nodeId: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Reset a Redis Cluster node.
   */
  clusterReset(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Reset a Redis Cluster node.
   */
  clusterResetWithOptions(options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Forces the node to save cluster state on disk.
   */
  clusterSaveconfig(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the configuration epoch in a new node.
   */
  clusterSetConfigEpoch(epoch: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Bind an hash slot to a specific node.
   */
  clusterSetslot(slot: number, subcommand: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Bind an hash slot to a specific node.
   */
  clusterSetslotWithNode(slot: number, subcommand: any, nodeId: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * List slave nodes of the specified master node.
   */
  clusterSlaves(nodeId: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get array of Cluster slot to node mappings
   */
  clusterSlots(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get array of Redis command details
   */
  command(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get total number of Redis commands
   */
  commandCount(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Extract keys given a full Redis command
   */
  commandGetkeys(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get array of specific Redis command details
   */
  commandInfo(commands: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the value of a configuration parameter
   */
  configGet(parameter: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Rewrite the configuration file with the in memory configuration
   */
  configRewrite(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set a configuration parameter to the given value
   */
  configSet(parameter: string, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Reset the stats returned by INFO
   */
  configResetstat(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the number of keys in the selected database
   */
  dbsize(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get debugging information about a key
   */
  debugObject(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Make the server crash
   */
  debugSegfault(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Decrement the integer value of a key by one
   */
  decr(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Decrement the integer value of a key by the given number
   */
  decrby(key: string, decrement: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Delete a key
   */
  del(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Delete many keys
   */
  delMany(keys: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Discard all commands issued after MULTI
   */
  discard(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return a serialized version of the value stored at the specified key.
   */
  dump(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Echo the given string
   */
  echo(message: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Execute a Lua script server side. Due to the dynamic nature of this command any response type could be returned
   * for This reason and to ensure type safety the reply is always guaranteed to be a JsonArray.
   * <p>
   * When a reply if for example a String the handler will be called with a JsonArray with a single element containing
   * the String.
   */
  eval(script: string, keys: Array<string>, args: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Execute a Lua script server side. Due to the dynamic nature of this command any response type could be returned
   * for This reason and to ensure type safety the reply is always guaranteed to be a JsonArray.
   * <p>
   * When a reply if for example a String the handler will be called with a JsonArray with a single element containing
   * the String.
   */
  evalsha(sha1: string, keys: Array<string>, values: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Execute all commands issued after MULTI
   */
  exec(handler: (res: any[], err?: Throwable) => void): RedisTransaction;

  /**
   * Determine if a key exists
   */
  exists(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set a key's time to live in seconds
   */
  expire(key: string, seconds: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the expiration for a key as a UNIX timestamp
   */
  expireat(key: string, seconds: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove all keys from all databases
   */
  flushall(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove all keys from the current database
   */
  flushdb(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the value of a key
   */
  get(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the value of a key - without decoding as utf-8
   */
  getBinary(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Returns the bit value at offset in the string value stored at key
   */
  getbit(key: string, offset: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get a substring of the string stored at a key
   */
  getrange(key: string, start: number, end: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the string value of a key and return its old value
   */
  getset(key: string, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Delete one or more hash fields
   */
  hdel(key: string, field: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Delete one or more hash fields
   */
  hdelMany(key: string, fields: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Determine if a hash field exists
   */
  hexists(key: string, field: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the value of a hash field
   */
  hget(key: string, field: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get all the fields and values in a hash
   */
  hgetall(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Increment the integer value of a hash field by the given number
   */
  hincrby(key: string, field: string, increment: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Increment the float value of a hash field by the given amount
   */
  hincrbyfloat(key: string, field: string, increment: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get all the fields in a hash
   */
  hkeys(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the number of fields in a hash
   */
  hlen(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the values of all the given hash fields
   */
  hmget(key: string, fields: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set multiple hash fields to multiple values
   */
  hmset(key: string, values: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the string value of a hash field
   */
  hset(key: string, field: string, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the value of a hash field, only if the field does not exist
   */
  hsetnx(key: string, field: string, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get all the values in a hash
   */
  hvals(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Increment the integer value of a key by one
   */
  incr(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Increment the integer value of a key by the given amount
   */
  incrby(key: string, increment: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Increment the float value of a key by the given amount
   */
  incrbyfloat(key: string, increment: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get information and statistics about the server
   */
  info(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get information and statistics about the server
   */
  infoSection(section: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Find all keys matching the given pattern
   */
  keys(pattern: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the UNIX time stamp of the last successful save to disk
   */
  lastsave(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get an element from a list by its index
   */
  lindex(key: string, index: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Insert an element before or after another element in a list
   */
  linsert(key: string, option: any, pivot: string, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the length of a list
   */
  llen(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove and get the first element in a list
   */
  lpop(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Prepend one or multiple values to a list
   */
  lpushMany(key: string, values: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Prepend one value to a list
   */
  lpush(key: string, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Prepend a value to a list, only if the list exists
   */
  lpushx(key: string, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get a range of elements from a list
   */
  lrange(key: string, from: number, to: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove elements from a list
   */
  lrem(key: string, count: number, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the value of an element in a list by its index
   */
  lset(key: string, index: number, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Trim a list to the specified range
   */
  ltrim(key: string, from: number, to: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the value of the given key
   */
  mget(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the values of all the given keys
   */
  mgetMany(keys: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Atomically transfer a key from a Redis instance to another one.
   */
  migrate(host: string, port: number, key: string, destdb: number, timeout: number, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Listen for all requests received by the server in real time
   */
  monitor(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Move a key to another database
   */
  move(key: string, destdb: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set multiple keys to multiple values
   */
  mset(keyvals: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set multiple keys to multiple values, only if none of the keys exist
   */
  msetnx(keyvals: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Mark the start of a RedisTransaction block
   */
  multi(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Inspect the internals of Redis objects
   */
  object(key: string, cmd: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove the expiration from a key
   */
  persist(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set a key's time to live in milliseconds
   */
  pexpire(key: string, millis: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the expiration for a key as a UNIX timestamp specified in milliseconds
   */
  pexpireat(key: string, millis: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Adds the specified element to the specified HyperLogLog.
   */
  pfadd(key: string, element: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Adds the specified elements to the specified HyperLogLog.
   */
  pfaddMany(key: string, elements: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the approximated cardinality of the set observed by the HyperLogLog at key.
   */
  pfcount(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).
   */
  pfcountMany(keys: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Merge N different HyperLogLogs into a single one.
   */
  pfmerge(destkey: string, keys: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Ping the server
   */
  ping(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the value and expiration in milliseconds of a key
   */
  psetex(key: string, millis: number, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Listen for messages published to channels matching the given pattern
   */
  psubscribe(pattern: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Listen for messages published to channels matching the given patterns
   */
  psubscribeMany(patterns: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Lists the currently active channels - only those matching the pattern
   */
  pubsubChannels(pattern: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Returns the number of subscribers (not counting clients subscribed to patterns) for the specified channels
   */
  pubsubNumsub(channels: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Returns the number of subscriptions to patterns (that are performed using the PSUBSCRIBE command)
   */
  pubsubNumpat(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the time to live for a key in milliseconds
   */
  pttl(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Post a message to a channel
   */
  publish(channel: string, message: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Stop listening for messages posted to channels matching the given patterns
   */
  punsubscribe(patterns: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return a random key from the keyspace
   */
  randomkey(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Rename a key
   */
  rename(key: string, newkey: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Rename a key, only if the new key does not exist
   */
  renamenx(key: string, newkey: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Create a key using the provided serialized value, previously obtained using DUMP.
   */
  restore(key: string, millis: number, serialized: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the role of the instance in the context of replication
   */
  role(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove and get the last element in a list
   */
  rpop(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove the last element in a list, append it to another list and return it
   */
  rpoplpush(key: string, destkey: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Append one or multiple values to a list
   */
  rpushMany(key: string, values: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Append one or multiple values to a list
   */
  rpush(key: string, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Append a value to a list, only if the list exists
   */
  rpushx(key: string, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Add a member to a set
   */
  sadd(key: string, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Add one or more members to a set
   */
  saddMany(key: string, members: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Synchronously save the dataset to disk
   */
  save(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the number of members in a set
   */
  scard(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Check existence of script in the script cache.
   */
  scriptExists(script: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Check existence of scripts in the script cache.
   */
  scriptExistsMany(scripts: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove all the scripts from the script cache.
   */
  scriptFlush(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Kill the script currently in execution.
   */
  scriptKill(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Load the specified Lua script into the script cache.
   */
  scriptLoad(script: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Subtract multiple sets
   */
  sdiff(key: string, cmpkeys: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Subtract multiple sets and store the resulting set in a key
   */
  sdiffstore(destkey: string, key: string, cmpkeys: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Change the selected database for the current connection
   */
  select(dbindex: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the string value of a key
   */
  set(key: string, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the string value of a key
   */
  setWithOptions(key: string, value: string, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the binary string value of a key - without encoding as utf-8
   */
  setBinary(key: string, value: Buffer, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the string value of a key
   */
  setBinaryWithOptions(key: string, value: Buffer, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Sets or clears the bit at offset in the string value stored at key
   */
  setbit(key: string, offset: number, bit: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the value and expiration of a key
   */
  setex(key: string, seconds: number, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Set the value of a key, only if the key does not exist
   */
  setnx(key: string, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Overwrite part of a string at key starting at the specified offset
   */
  setrange(key: string, offset: number, value: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Intersect multiple sets
   */
  sinter(keys: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Intersect multiple sets and store the resulting set in a key
   */
  sinterstore(destkey: string, keys: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Determine if a given value is a member of a set
   */
  sismember(key: string, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Make the server a slave of another instance
   */
  slaveof(host: string, port: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Make this server a master
   */
  slaveofNoone(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Read the Redis slow queries log
   */
  slowlogGet(limit: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the length of the Redis slow queries log
   */
  slowlogLen(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Reset the Redis slow queries log
   */
  slowlogReset(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get all the members in a set
   */
  smembers(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Move a member from one set to another
   */
  smove(key: string, destkey: string, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Sort the elements in a list, set or sorted set
   */
  sort(key: string, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove and return a random member from a set
   */
  spop(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove and return random members from a set
   */
  spopMany(key: string, count: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get one or multiple random members from a set
   */
  srandmember(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get one or multiple random members from a set
   */
  srandmemberCount(key: string, count: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove one member from a set
   */
  srem(key: string, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove one or more members from a set
   */
  sremMany(key: string, members: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the length of the value stored in a key
   */
  strlen(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Listen for messages published to the given channels
   */
  subscribe(channel: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Listen for messages published to the given channels
   */
  subscribeMany(channels: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Add multiple sets
   */
  sunion(keys: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Add multiple sets and store the resulting set in a key
   */
  sunionstore(destkey: string, keys: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Internal command used for replication
   */
  sync(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the current server time
   */
  time(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the time to live for a key
   */
  ttl(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Determine the type stored at key
   */
  type(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Stop listening for messages posted to the given channels
   */
  unsubscribe(channels: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Forget about all watched keys
   */
  unwatch(handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Wait for the synchronous replication of all the write commands sent in the context of the current connection.
   */
  wait(numSlaves: number, timeout: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Watch the given keys to determine execution of the MULTI/EXEC block
   */
  watch(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Watch the given keys to determine execution of the MULTI/EXEC block
   */
  watchMany(keys: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Add one or more members to a sorted set, or update its score if it already exists
   */
  zadd(key: string, score: number, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Add one or more members to a sorted set, or update its score if it already exists
   */
  zaddMany(key: string, members: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the number of members in a sorted set
   */
  zcard(key: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Count the members in a sorted set with scores within the given values
   */
  zcount(key: string, min: number, max: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Increment the score of a member in a sorted set
   */
  zincrby(key: string, increment: number, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Intersect multiple sorted sets and store the resulting sorted set in a new key
   */
  zinterstore(destkey: string, sets: Array<string>, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Intersect multiple sorted sets and store the resulting sorted set in a new key using weights for scoring
   */
  zinterstoreWeighed(destkey: string, sets: Array<string>, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Count the number of members in a sorted set between a given lexicographical range
   */
  zlexcount(key: string, min: string, max: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return a range of members in a sorted set, by index
   */
  zrange(key: string, start: number, stop: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return a range of members in a sorted set, by index
   */
  zrangeWithOptions(key: string, start: number, stop: number, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return a range of members in a sorted set, by lexicographical range
   */
  zrangebylex(key: string, min: string, max: string, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return a range of members in a sorted set, by score
   */
  zrangebyscore(key: string, min: string, max: string, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Determine the index of a member in a sorted set
   */
  zrank(key: string, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove one member from a sorted set
   */
  zrem(key: string, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove one or more members from a sorted set
   */
  zremMany(key: string, members: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove all members in a sorted set between the given lexicographical range
   */
  zremrangebylex(key: string, min: string, max: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove all members in a sorted set within the given indexes
   */
  zremrangebyrank(key: string, start: number, stop: number, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Remove all members in a sorted set within the given scores
   */
  zremrangebyscore(key: string, min: string, max: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return a range of members in a sorted set, by index, with scores ordered from high to low
   */
  zrevrange(key: string, start: number, stop: number, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return a range of members in a sorted set, by score, between the given lexicographical range with scores ordered from high to low
   */
  zrevrangebylex(key: string, max: string, min: string, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return a range of members in a sorted set, by score, with scores ordered from high to low
   */
  zrevrangebyscore(key: string, max: string, min: string, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Determine the index of a member in a sorted set, with scores ordered from high to low
   */
  zrevrank(key: string, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Get the score associated with the given member in a sorted set
   */
  zscore(key: string, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Add multiple sorted sets and store the resulting sorted set in a new key
   */
  zunionstore(destkey: string, sets: Array<string>, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Add multiple sorted sets using weights, and store the resulting sorted set in a new key
   */
  zunionstoreWeighed(key: string, sets: Array<string>, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Incrementally iterate the keys space
   */
  scan(cursor: string, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Incrementally iterate Set elements
   */
  sscan(key: string, cursor: string, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Incrementally iterate hash fields and associated values
   */
  hscan(key: string, cursor: string, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Incrementally iterate sorted sets elements and associated scores
   */
  zscan(key: string, cursor: string, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Add one or more geospatial items in the geospatial index represented using a sorted set.
   */
  geoadd(key: string, longitude: number, latitude: number, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Add one or more geospatial items in the geospatial index represented using a sorted set.
   */
  geoaddMany(key: string, members: Array<any>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return valid Geohash strings representing the position of one or more elements in a sorted set value representing
   * a geospatial index (where elements were added using GEOADD).
   */
  geohash(key: string, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return valid Geohash strings representing the position of one or more elements in a sorted set value representing
   * a geospatial index (where elements were added using GEOADD).
   */
  geohashMany(key: string, members: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the positions (longitude,latitude) of all the specified members of the geospatial index represented by the
   * sorted set at key.
   */
  geopos(key: string, member: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the positions (longitude,latitude) of all the specified members of the geospatial index represented by the
   * sorted set at key.
   */
  geoposMany(key: string, members: Array<string>, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the distance between two members in the geospatial index represented by the sorted set.
   */
  geodist(key: string, member1: string, member2: string, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the distance between two members in the geospatial index represented by the sorted set.
   */
  geodistWithUnit(key: string, member1: string, member2: string, unit: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the members of a sorted set populated with geospatial information using GEOADD, which are within the borders
   * of the area specified with the center location and the maximum distance from the center (the radius).
   */
  georadius(key: string, longitude: number, latitude: number, radius: number, unit: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * Return the members of a sorted set populated with geospatial information using GEOADD, which are within the borders
   * of the area specified with the center location and the maximum distance from the center (the radius).
   */
  georadiusWithOptions(key: string, longitude: number, latitude: number, radius: number, unit: any, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * This command is exactly like GEORADIUS with the sole difference that instead of taking, as the center of the area
   * to query, a longitude and latitude value, it takes the name of a member already existing inside the geospatial
   * index represented by the sorted set.
   */
  georadiusbymember(key: string, member: string, radius: number, unit: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

  /**
   * This command is exactly like GEORADIUS with the sole difference that instead of taking, as the center of the area
   * to query, a longitude and latitude value, it takes the name of a member already existing inside the geospatial
   * index represented by the sorted set.
   */
  georadiusbymemberWithOptions(key: string, member: string, radius: number, unit: any, options: any, handler: (res: string, err?: Throwable) => void): RedisTransaction;

}

declare var RedisTransaction: {

}