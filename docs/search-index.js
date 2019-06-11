var N=null,E="",T="t",U="u",searchIndex={};
var R=["glean_core","string","commonmetricdata","option","glean","test_get_value","Test-only API (exported for FFI purposes).","Public facing API for setting the metric to a date/time…","datetime","result","Set to the specified value.","should_record","category","jsonvalue","pingtype","database","snapshot","to_string","try_from","borrow_mut","try_into","type_id","to_owned","clone_into","borrow","typeid","glean_core::metrics","dataerror","to_bytes","glean_core::ping","glean_core::storage","meta_mut","lifetime","labeledmetric","timeunit","errorkind","default","formatter","serialize","deserialize","backtrace","CommonMetricData","Lifetime","ErrorType","PingType","TimeUnit","BooleanMetric","CounterMetric","DatetimeMetric","LabeledMetric","StringMetric","StringListMetric","UuidMetric","MetricType","PingMaker","StorageManager","glean_ffi","externerror","Create a new labeled metric.","Create a new instance of the sub-metric of this labeled…","ffistr"];
searchIndex[R[56]]={"doc":E,"i":[[5,"glean_destroy_labeled_counter_metric",R[56],E,N,[[[R[57]],["u64"]]]],[5,"glean_new_labeled_counter_metric",E,R[58],N,[[[R[60]],["i32"],["u8"]],["u64"]]],[5,"glean_labeled_counter_metric_get",E,R[59],N,[[[R[60]],["u64"]],["u64"]]],[5,"glean_destroy_labeled_boolean_metric",E,E,N,[[[R[57]],["u64"]]]],[5,"glean_new_labeled_boolean_metric",E,R[58],N,[[[R[60]],["i32"],["u8"]],["u64"]]],[5,"glean_labeled_boolean_metric_get",E,R[59],N,[[[R[60]],["u64"]],["u64"]]],[5,"glean_destroy_labeled_string_metric",E,E,N,[[[R[57]],["u64"]]]],[5,"glean_new_labeled_string_metric",E,R[58],N,[[[R[60]],["i32"],["u8"]],["u64"]]],[5,"glean_labeled_string_metric_get",E,R[59],N,[[[R[60]],["u64"]],["u64"]]],[5,"glean_enable_logging",E,"Initialize the logging system based on the target…",N,[[]]],[5,"glean_initialize",E,E,N,[[[R[60]],["u8"]],["u64"]]],[5,"glean_is_upload_enabled",E,E,N,[[["u64"]],["u8"]]],[5,"glean_set_upload_enabled",E,E,N,[[["u8"],["u64"]]]],[5,"glean_send_ping",E,E,N,[[["u8"],["u64"]],["u8"]]],[5,"glean_send_ping_by_name",E,E,N,[[[R[60]],["u8"],["u64"]],["u8"]]],[5,"glean_new_ping_type",E,E,N,[[[R[60]],["u8"]],["u64"]]],[5,"glean_test_has_ping_type",E,E,N,[[[R[60]],["u64"]],["u8"]]],[5,"glean_register_ping_type",E,E,N,[[["u64"]]]],[5,"glean_new_boolean_metric",E,E,N,[[[R[60]],["i32"],["u8"]],["u64"]]],[5,"glean_new_string_metric",E,E,N,[[[R[60]],["i32"],["u8"]],["u64"]]],[5,"glean_new_string_list_metric",E,E,N,[[[R[60]],["i32"],["u8"]],["u64"]]],[5,"glean_new_counter_metric",E,E,N,[[[R[60]],["i32"],["u8"]],["u64"]]],[5,"glean_counter_should_record",E,E,N,[[["u64"]],["u8"]]],[5,"glean_counter_add",E,E,N,[[["i32"],["u64"]]]],[5,"glean_counter_test_has_value",E,E,N,[[[R[60]],["u64"]],["u8"]]],[5,"glean_counter_test_get_value",E,E,N,[[[R[60]],["u64"]],["i32"]]],[5,"glean_boolean_should_record",E,E,N,[[["u64"]],["u8"]]],[5,"glean_boolean_set",E,E,N,[[["u8"],["u64"]]]],[5,"glean_boolean_test_has_value",E,E,N,[[[R[60]],["u64"]],["u8"]]],[5,"glean_boolean_test_get_value",E,E,N,[[[R[60]],["u64"]],["u8"]]],[5,"glean_new_datetime_metric",E,E,N,[[[R[60]],["i32"],["u8"]],["u64"]]],[5,"glean_datetime_set",E,E,N,[[["u32"],["i32"],["i64"],["u64"]]]],[5,"glean_datetime_should_record",E,E,N,[[["u64"]],["u8"]]],[5,"glean_datetime_test_has_value",E,E,N,[[[R[60]],["u64"]],["u8"]]],[5,"glean_datetime_test_get_value_as_string",E,E,N,[[[R[60]],["u64"]]]],[5,"glean_string_should_record",E,E,N,[[["u64"]],["u8"]]],[5,"glean_string_set",E,E,N,[[[R[60]],["u64"]]]],[5,"glean_string_test_has_value",E,E,N,[[[R[60]],["u64"]],["u8"]]],[5,"glean_string_test_get_value",E,E,N,[[[R[60]],["u64"]]]],[5,"glean_string_list_should_record",E,E,N,[[["u64"]],["u8"]]],[5,"glean_string_list_add",E,E,N,[[[R[60]],["u64"]]]],[5,"glean_string_list_set",E,E,N,[[["i32"],["u64"]]]],[5,"glean_string_list_test_has_value",E,E,N,[[[R[60]],["u64"]],["u8"]]],[5,"glean_string_list_test_get_value_as_json_string",E,E,N,[[[R[60]],["u64"]]]],[5,"glean_ping_collect",E,E,N,[[["u64"]]]],[5,"glean_destroy_glean",E,E,N,[[[R[57]],["u64"]]]],[5,"glean_destroy_ping_type",E,E,N,[[[R[57]],["u64"]]]],[5,"glean_destroy_boolean_metric",E,E,N,[[[R[57]],["u64"]]]],[5,"glean_destroy_string_metric",E,E,N,[[[R[57]],["u64"]]]],[5,"glean_destroy_string_list_metric",E,E,N,[[[R[57]],["u64"]]]],[5,"glean_destroy_counter_metric",E,E,N,[[[R[57]],["u64"]]]],[5,"glean_destroy_datetime_metric",E,E,N,[[[R[57]],["u64"]]]],[5,"glean_str_free",E,"Public destructor for strings managed by the other side of…",N,[[]]]],"p":[]};
searchIndex[R[0]]={"doc":E,"i":[[3,R[41],R[0],E,N,N],[12,"name",E,E,0,N],[12,R[12],E,E,0,N],[12,"send_in_pings",E,E,0,N],[12,R[32],E,E,0,N],[12,"disabled",E,E,0,N],[3,"Error",E,"A specialized [`Error`] type for this crate's operations.",N,N],[3,"Glean",E,E,N,N],[4,R[42],E,E,N,N],[13,"Ping",E,"The metric is reset with each sent ping",1,N],[13,"Application",E,"The metric is reset on application restart",1,N],[13,"User",E,"The metric is reset with each user profile",1,N],[4,R[43],E,"The possible error types for metric recording.",N,N],[13,"InvalidValue",E,"For when the value to be recorded does not match the…",2,N],[13,"InvalidLabel",E,"For when the label of a labeled metric does not match the…",2,N],[5,"test_get_num_recorded_errors",E,"Get the number of recorded errors for the given metric and…",N,[[["str"],["errortype"],[R[3],["str"]],[R[2]],[R[4]]],[[R[1]],[R[9],["i32",R[1]]],["i32"]]]],[11,"as_str",E,E,1,[[],["str"]]],[11,"new",E,"Create a new metadata object",0,[[[R[1]],["into",[R[1]]]],[R[2]]]],[11,"identifier",E,E,0,[[["self"]],[R[1]]]],[11,R[11],E,E,0,[[["self"]],["bool"]]],[11,"storage_names",E,E,0,[[["self"]]]],[11,"kind",E,"Access the [`ErrorKind`] member.",3,[[["self"]],[R[35]]]],[11,R[17],E,"The error type's metric name",2,[[["self"]],["str"]]],[0,"metrics",E,"The different metric types supported by the Glean SDK to…",N,N],[3,R[46],R[26],"A boolean metric.",N,N],[3,R[47],E,"A counter metric.",N,N],[3,R[48],E,"A datetime metric.",N,N],[3,R[49],E,"A labeled metric.",N,N],[3,R[44],E,"Stores information about a ping.",N,N],[12,"name",E,"The name of the ping.",4,N],[12,"include_client_id",E,"Whether the ping should include the client_id data",4,N],[3,R[50],E,"A string metric.",N,N],[3,R[51],E,"A string list metric.",N,N],[3,R[52],E,"An UUID metric.",N,N],[4,R[45],E,"Different resolutions supported by the time related metric…",N,N],[13,"Nanosecond",E,E,5,N],[13,"Microsecond",E,E,5,N],[13,"Millisecond",E,E,5,N],[13,"Second",E,E,5,N],[13,"Minute",E,E,5,N],[13,"Hour",E,E,5,N],[13,"Day",E,E,5,N],[4,"Metric",E,"The available metrics.",N,N],[13,"Boolean",E,"A boolean metric. See `BooleanMetric` for more information.",6,N],[13,"Counter",E,"A counter metric. See `CounterMetric` for more information.",6,N],[13,"Datetime",E,"A datetime metric. See `DatetimeMetric` for more…",6,N],[13,"String",E,"A string metric. See `StringMetric` for more information.",6,N],[13,"StringList",E,"A string list metric. See `StringListMetric` for more…",6,N],[13,"Uuid",E,"A UUID metric. See `UuidMetric` for more information.",6,N],[11,"new",E,"Create a new boolean metric.",7,[[[R[2]]],["self"]]],[11,"set",E,"Set to the specified boolean value.",7,[[["self"],["bool"],[R[4]]]]],[11,R[5],E,R[6],7,[[["str"],["self"],[R[4]]],[[R[3],["bool"]],["bool"]]]],[11,"new",E,"Create a new counter metric.",8,[[[R[2]]],["self"]]],[11,"add",E,"Increase the counter by `amount`.",8,[[["i32"],["self"],[R[4]]]]],[11,R[5],E,R[6],8,[[["str"],["self"],[R[4]]],[["i32"],[R[3],["i32"]]]]],[11,"new",E,"Create a new datetime metric.",9,[[[R[2]],[R[34]]],["self"]]],[11,"set_with_details",E,R[7],9,[[["u32"],["i32"],["self"],[R[4]]]]],[11,"set",E,R[7],9,[[[R[3],[R[8]]],["self"],[R[4]],[R[8],["fixedoffset"]]]]],[11,"test_get_value_as_string",E,R[6],9,[[["str"],["self"],[R[4]]],[[R[1]],[R[3],[R[1]]]]]],[11,"new",E,"Create a new labeled metric from the given metric instance…",10,[[["vec",[R[1]]],[R[3],["vec"]],[T]],[R[33]]]],[11,"get",E,"Get a specific metric for a given label.",10,[[["str"],["self"],[R[4]]],[T]]],[11,"new",E,E,4,[[[R[1]],["bool"],["into",[R[1]]]],["self"]]],[11,"send",E,E,4,[[["self"],["bool"],[R[4]]],[["bool"],[R[9],["bool"]]]]],[11,"new",E,"Create a new string metric.",11,[[[R[2]]],["self"]]],[11,"set",E,R[10],11,[[[R[1]],["self"],[R[4]],["into",[R[1]]]]]],[11,R[5],E,R[6],11,[[["str"],["self"],[R[4]]],[[R[1]],[R[3],[R[1]]]]]],[11,"new",E,"Create a new string list metric.",12,[[[R[2]]],["self"]]],[11,"add",E,"Add a new string to the list.",12,[[[R[1]],["self"],[R[4]],["into",[R[1]]]]]],[11,"set",E,"Set to a specific list of strings.",12,[[["vec",[R[1]]],[R[1]],["self"],[R[4]]]]],[11,R[5],E,R[6],12,[[["str"],["self"],[R[4]]],[["vec",[R[1]]],[R[3],["vec"]]]]],[11,"test_get_value_as_json_string",E,R[6],12,[[["str"],["self"],[R[4]]],[[R[1]],[R[3],[R[1]]]]]],[11,"format_pattern",E,"How to format the given TimeUnit, truncating the time if…",5,[[],["str"]]],[11,"new",E,"Create a new UUID metric",13,[[[R[2]]],["self"]]],[11,"set",E,R[10],13,[[["self"],[R[4]],["uuid"]]]],[11,"generate",E,"Generate a new random UUID and set the metric to it.",13,[[["self"],[R[4]]],["uuid"]]],[11,"generate_if_missing",E,"Generate a new random UUID if none is stored yet.",13,[[["self"],[R[4]]]]],[8,R[53],E,"A `MetricType` describes common behavior across all metrics.",N,N],[10,"meta",E,"Access the stored metadata",14,[[["self"]],[R[2]]]],[10,R[31],E,"Access the stored metadata mutable",14,[[["self"]],[R[2]]]],[11,R[11],E,"Whether this metric should currently be recorded",14,[[["self"],[R[4]]],["bool"]]],[11,R[12],E,"The category the metric fits into.",6,[[["self"]],["str"]]],[11,"as_json",E,"The JSON representation of the metric's data",6,[[["self"]],[R[13]]]],[0,"ping",R[0],E,N,N],[3,R[54],R[29],E,N,N],[11,"new",E,E,15,[[],["self"]]],[11,"collect",E,E,15,[[[R[14]],["self"],[R[4]]],[[R[13]],[R[3],[R[13]]]]]],[11,"collect_string",E,E,15,[[[R[14]],["self"],[R[4]]],[[R[1]],[R[3],[R[1]]]]]],[11,"store_ping",E,"Store a ping to disk in the pings directory.",15,[[["str"],["path"],["self"],[R[13]]],[R[9]]]],[0,"storage",R[0],E,N,N],[3,R[55],R[30],E,N,N],[11,R[16],E,E,16,[[["str"],["self"],["bool"],[R[15]]],[[R[1]],[R[3],[R[1]]]]]],[11,"snapshot_as_json",E,E,16,[[["str"],["self"],["bool"],[R[15]]],[[R[13]],[R[3],[R[13]]]]]],[11,"snapshot_metric",E,"Get the current value of a single metric identified by name.",16,[[["str"],["self"],[R[15]]],[[R[3],["metric"]],["metric"]]]],[6,"Result",R[0],"A specialized [`Result`] type for this crate's operations.",N,N],[11,"new",E,"Initialize the global Glean object.",17,[[["str"],["bool"]],[R[9]]]],[11,"set_upload_enabled",E,"Set whether upload is enabled or not.",17,[[["self"],["bool"]]]],[11,"is_upload_enabled",E,"Determine whether upload is enabled.",17,[[["self"]],["bool"]]],[11,"get_application_id",E,E,17,[[["self"]],["str"]]],[11,"get_data_path",E,E,17,[[["self"]],["path"]]],[11,"storage",E,E,17,[[["self"]],[R[15]]]],[11,R[16],E,E,17,[[["str"],["self"],["bool"]],[R[1]]]],[11,"send_ping",E,"Send a ping.",17,[[[R[14]],["self"],["bool"]],[["bool"],[R[9],["bool"]]]]],[11,"send_ping_by_name",E,"Send a ping by name.",17,[[["str"],["self"],["bool"]],[["bool"],[R[9],["bool"]]]]],[11,"get_ping_by_name",E,E,17,[[["str"],["self"]],[[R[14]],[R[3],[R[14]]]]]],[11,"register_ping_type",E,E,17,[[["self"],[R[14]]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[22],E,E,0,[[["self"]],[T]]],[11,R[23],E,E,0,[[[T],["self"]]]],[11,R[18],E,E,0,[[[U]],[R[9]]]],[11,R[24],E,E,0,[[["self"]],[T]]],[11,R[21],E,E,0,[[["self"]],[R[25]]]],[11,R[19],E,E,0,[[["self"]],[T]]],[11,R[20],E,E,0,[[],[R[9]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[17],E,E,3,[[["self"]],[R[1]]]],[11,R[18],E,E,3,[[[U]],[R[9]]]],[11,R[24],E,E,3,[[["self"]],[T]]],[11,R[21],E,E,3,[[["self"]],[R[25]]]],[11,R[19],E,E,3,[[["self"]],[T]]],[11,R[20],E,E,3,[[],[R[9]]]],[11,"as_fail",E,E,3,[[["self"]],["fail"]]],[11,"from",E,E,17,[[[T]],[T]]],[11,"into",E,E,17,[[],[U]]],[11,R[18],E,E,17,[[[U]],[R[9]]]],[11,R[24],E,E,17,[[["self"]],[T]]],[11,R[21],E,E,17,[[["self"]],[R[25]]]],[11,R[19],E,E,17,[[["self"]],[T]]],[11,R[20],E,E,17,[[],[R[9]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[22],E,E,1,[[["self"]],[T]]],[11,R[23],E,E,1,[[[T],["self"]]]],[11,R[18],E,E,1,[[[U]],[R[9]]]],[11,R[24],E,E,1,[[["self"]],[T]]],[11,R[21],E,E,1,[[["self"]],[R[25]]]],[11,R[19],E,E,1,[[["self"]],[T]]],[11,R[20],E,E,1,[[],[R[9]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[18],E,E,2,[[[U]],[R[9]]]],[11,R[24],E,E,2,[[["self"]],[T]]],[11,R[21],E,E,2,[[["self"]],[R[25]]]],[11,R[19],E,E,2,[[["self"]],[T]]],[11,R[20],E,E,2,[[],[R[9]]]],[11,"from",R[26],E,7,[[[T]],[T]]],[11,"into",E,E,7,[[],[U]]],[11,R[22],E,E,7,[[["self"]],[T]]],[11,R[23],E,E,7,[[[T],["self"]]]],[11,R[18],E,E,7,[[[U]],[R[9]]]],[11,R[24],E,E,7,[[["self"]],[T]]],[11,R[21],E,E,7,[[["self"]],[R[25]]]],[11,R[19],E,E,7,[[["self"]],[T]]],[11,R[20],E,E,7,[[],[R[9]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,"into",E,E,8,[[],[U]]],[11,R[22],E,E,8,[[["self"]],[T]]],[11,R[23],E,E,8,[[[T],["self"]]]],[11,R[18],E,E,8,[[[U]],[R[9]]]],[11,R[24],E,E,8,[[["self"]],[T]]],[11,R[21],E,E,8,[[["self"]],[R[25]]]],[11,R[19],E,E,8,[[["self"]],[T]]],[11,R[20],E,E,8,[[],[R[9]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,"into",E,E,9,[[],[U]]],[11,R[18],E,E,9,[[[U]],[R[9]]]],[11,R[24],E,E,9,[[["self"]],[T]]],[11,R[21],E,E,9,[[["self"]],[R[25]]]],[11,R[19],E,E,9,[[["self"]],[T]]],[11,R[20],E,E,9,[[],[R[9]]]],[11,"from",E,E,10,[[[T]],[T]]],[11,"into",E,E,10,[[],[U]]],[11,R[22],E,E,10,[[["self"]],[T]]],[11,R[23],E,E,10,[[[T],["self"]]]],[11,R[18],E,E,10,[[[U]],[R[9]]]],[11,R[24],E,E,10,[[["self"]],[T]]],[11,R[21],E,E,10,[[["self"]],[R[25]]]],[11,R[19],E,E,10,[[["self"]],[T]]],[11,R[20],E,E,10,[[],[R[9]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[22],E,E,4,[[["self"]],[T]]],[11,R[23],E,E,4,[[[T],["self"]]]],[11,R[18],E,E,4,[[[U]],[R[9]]]],[11,R[24],E,E,4,[[["self"]],[T]]],[11,R[21],E,E,4,[[["self"]],[R[25]]]],[11,R[19],E,E,4,[[["self"]],[T]]],[11,R[20],E,E,4,[[],[R[9]]]],[11,"from",E,E,11,[[[T]],[T]]],[11,"into",E,E,11,[[],[U]]],[11,R[22],E,E,11,[[["self"]],[T]]],[11,R[23],E,E,11,[[[T],["self"]]]],[11,R[18],E,E,11,[[[U]],[R[9]]]],[11,R[24],E,E,11,[[["self"]],[T]]],[11,R[21],E,E,11,[[["self"]],[R[25]]]],[11,R[19],E,E,11,[[["self"]],[T]]],[11,R[20],E,E,11,[[],[R[9]]]],[11,"from",E,E,12,[[[T]],[T]]],[11,"into",E,E,12,[[],[U]]],[11,R[22],E,E,12,[[["self"]],[T]]],[11,R[23],E,E,12,[[[T],["self"]]]],[11,R[18],E,E,12,[[[U]],[R[9]]]],[11,R[24],E,E,12,[[["self"]],[T]]],[11,R[21],E,E,12,[[["self"]],[R[25]]]],[11,R[19],E,E,12,[[["self"]],[T]]],[11,R[20],E,E,12,[[],[R[9]]]],[11,"from",E,E,13,[[[T]],[T]]],[11,"into",E,E,13,[[],[U]]],[11,R[22],E,E,13,[[["self"]],[T]]],[11,R[23],E,E,13,[[[T],["self"]]]],[11,R[18],E,E,13,[[[U]],[R[9]]]],[11,R[24],E,E,13,[[["self"]],[T]]],[11,R[21],E,E,13,[[["self"]],[R[25]]]],[11,R[19],E,E,13,[[["self"]],[T]]],[11,R[20],E,E,13,[[],[R[9]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[22],E,E,5,[[["self"]],[T]]],[11,R[23],E,E,5,[[[T],["self"]]]],[11,R[18],E,E,5,[[[U]],[R[9]]]],[11,R[24],E,E,5,[[["self"]],[T]]],[11,R[21],E,E,5,[[["self"]],[R[25]]]],[11,R[19],E,E,5,[[["self"]],[T]]],[11,R[20],E,E,5,[[],[R[9]]]],[11,R[28],E,E,5,[[["self"]],[["vec",["u8"]],[R[27]],[R[9],["vec",R[27]]]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[22],E,E,6,[[["self"]],[T]]],[11,R[23],E,E,6,[[[T],["self"]]]],[11,R[18],E,E,6,[[[U]],[R[9]]]],[11,R[24],E,E,6,[[["self"]],[T]]],[11,R[21],E,E,6,[[["self"]],[R[25]]]],[11,R[19],E,E,6,[[["self"]],[T]]],[11,R[20],E,E,6,[[],[R[9]]]],[11,R[28],E,E,6,[[["self"]],[["vec",["u8"]],[R[27]],[R[9],["vec",R[27]]]]]],[11,"from",R[29],E,15,[[[T]],[T]]],[11,"into",E,E,15,[[],[U]]],[11,R[18],E,E,15,[[[U]],[R[9]]]],[11,R[24],E,E,15,[[["self"]],[T]]],[11,R[21],E,E,15,[[["self"]],[R[25]]]],[11,R[19],E,E,15,[[["self"]],[T]]],[11,R[20],E,E,15,[[],[R[9]]]],[11,"from",R[30],E,16,[[[T]],[T]]],[11,"into",E,E,16,[[],[U]]],[11,R[18],E,E,16,[[[U]],[R[9]]]],[11,R[24],E,E,16,[[["self"]],[T]]],[11,R[21],E,E,16,[[["self"]],[R[25]]]],[11,R[19],E,E,16,[[["self"]],[T]]],[11,R[20],E,E,16,[[],[R[9]]]],[11,"meta",R[26],E,7,[[["self"]],[R[2]]]],[11,R[31],E,E,7,[[["self"]],[R[2]]]],[11,"meta",E,E,8,[[["self"]],[R[2]]]],[11,R[31],E,E,8,[[["self"]],[R[2]]]],[11,"meta",E,E,9,[[["self"]],[R[2]]]],[11,R[31],E,E,9,[[["self"]],[R[2]]]],[11,"meta",E,E,11,[[["self"]],[R[2]]]],[11,R[31],E,E,11,[[["self"]],[R[2]]]],[11,"meta",E,E,12,[[["self"]],[R[2]]]],[11,R[31],E,E,12,[[["self"]],[R[2]]]],[11,"meta",E,E,13,[[["self"]],[R[2]]]],[11,R[31],E,E,13,[[["self"]],[R[2]]]],[11,"eq",R[0],E,1,[[[R[32]],["self"]],["bool"]]],[11,"clone",E,E,1,[[["self"]],[R[32]]]],[11,"clone",E,E,0,[[["self"]],[R[2]]]],[11,"clone",R[26],E,7,[[["self"]],["booleanmetric"]]],[11,"clone",E,E,8,[[["self"]],["countermetric"]]],[11,"clone",E,E,10,[[["self"]],[R[33]]]],[11,"clone",E,E,4,[[["self"]],[R[14]]]],[11,"clone",E,E,11,[[["self"]],["stringmetric"]]],[11,"clone",E,E,12,[[["self"]],["stringlistmetric"]]],[11,"clone",E,E,5,[[["self"]],[R[34]]]],[11,"clone",E,E,13,[[["self"]],["uuidmetric"]]],[11,"clone",E,E,6,[[["self"]],["metric"]]],[11,"from",R[0],E,3,[[["context",[R[35]]],[R[35]]],["error"]]],[11,"from",E,E,3,[[["handleerror"]],["error"]]],[11,"from",E,E,3,[[["error"]],["error"]]],[11,"from",E,E,3,[[["storeerror"]],["error"]]],[11,"from",E,E,3,[[["error"]],["error"]]],[11,R[36],E,E,1,[[],["self"]]],[11,R[36],E,E,0,[[],[R[2]]]],[11,R[36],R[29],E,15,[[],["self"]]],[11,"fmt",R[0],E,1,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,0,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,3,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,2,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",R[26],E,7,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,8,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,9,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,10,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,4,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,11,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,12,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,5,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,13,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,6,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",R[0],E,17,[[[R[37]],["self"]],[R[9]]]],[11,"fmt",E,E,3,[[[R[37]],["self"]],[R[9]]]],[11,R[18],E,E,1,[[["i32"]],[[R[32]],[R[9],[R[32]]]]]],[11,R[18],R[26],E,5,[[["i32"]],[[R[34]],[R[9],[R[34]]]]]],[11,R[38],E,E,5,[[["__s"],["self"]],[R[9]]]],[11,R[38],E,E,6,[[["__s"],["self"]],[R[9]]]],[11,R[39],E,E,5,[[["__d"]],[R[9]]]],[11,R[39],E,E,6,[[["__d"]],[R[9]]]],[11,"cause",R[0],E,3,[[["self"]],[["fail"],[R[3],["fail"]]]]],[11,R[40],E,E,3,[[["self"]],[[R[3],[R[40]]],[R[40]]]]]],"p":[[3,R[41]],[4,R[42]],[4,R[43]],[3,"Error"],[3,R[44]],[4,R[45]],[4,"Metric"],[3,R[46]],[3,R[47]],[3,R[48]],[3,R[49]],[3,R[50]],[3,R[51]],[3,R[52]],[8,R[53]],[3,R[54]],[3,R[55]],[3,"Glean"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);