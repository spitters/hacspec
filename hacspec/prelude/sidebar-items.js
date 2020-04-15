initSidebarItems({"attr":[["external","Function that is not part of the language but is offered as a helper for tests, etc."],["internal","Internal function used in primitive implementations but that is not part of the language."],["library","Library function that is part of the language but implemented only with primitives and other library functions. As such, it does not need to be formalized as a primitive."],["primitive","Primitive function, part of the formalization of the language."],["to_remove","Function that should be removed from the library."]],"derive":[["Deserialize",""],["Serialize",""]],"enum":[["Bound","An endpoint of a range of keys."],["Bound","An endpoint of a range of keys."],["GeneratorState","The result of a generator resumption."],["GeneratorState","The result of a generator resumption."],["Ordering","An `Ordering` is the result of a comparison between two values."],["Sign","A Sign is a `BigInt`'s composing element."]],"fn":[["min","Compares and returns the minimum of two values."],["one","Returns the multiplicative identity, `1`."],["zero","Returns the additive identity, `0`."]],"macro":[["Debug","Derive macro generating an impl of the trait `Debug`."],["PartialEq","Derive macro generating an impl of the trait `PartialEq`."],["abstract_int",""],["abstract_nat_mod",""],["abstract_public",""],["abstract_public_modular_integer",""],["abstract_public_nat_mod",""],["abstract_secret",""],["abstract_secret_modular_integer",""],["abstract_signed",""],["abstract_signed_public_integer",""],["abstract_signed_secret_integer",""],["abstract_unsigned",""],["abstract_unsigned_public_integer",""],["abstract_unsigned_secret_integer",""],["define_abstract_integer_checked","Defines a bounded natural integer with regular arithmetic operations, checked for overflow and underflow."],["define_refined_modular_integer","Defines a bounded natural integer with modular arithmetic operations"],["modular_integer",""]],"mod":[["abstract_int",""],["fmt","Utilities for formatting and printing `String`s."],["nat_mod",""],["traits",""]],"struct":[["BigInt","A big signed integer type."],["BigUint","A big unsigned integer type."],["BigUint","A big unsigned integer type."],["BufReader","The `BufReader<R>` struct adds buffering to any reader."],["File","A reference to an open file on the filesystem."],["I128",""],["I16",""],["I32",""],["I64",""],["I8",""],["ParseIntError","An error which can be returned when parsing an integer."],["ParseIntError","An error which can be returned when parsing an integer."],["Range","A (half-open) range bounded inclusively below and exclusively above (`start..end`)."],["Range","A (half-open) range bounded inclusively below and exclusively above (`start..end`)."],["RangeFrom","A range only bounded inclusively below (`start..`)."],["RangeFrom","A range only bounded inclusively below (`start..`)."],["RangeFull","An unbounded range (`..`)."],["RangeFull","An unbounded range (`..`)."],["RangeInclusive","A range bounded inclusively below and above (`start..=end`)."],["RangeInclusive","A range bounded inclusively below and above (`start..=end`)."],["RangeTo","A range only bounded exclusively above (`..end`)."],["RangeTo","A range only bounded exclusively above (`..end`)."],["RangeToInclusive","A range only bounded inclusively above (`..=end`)."],["RangeToInclusive","A range only bounded inclusively above (`..=end`)."],["U128",""],["U16",""],["U32",""],["U64",""],["U8",""]],"trait":[["Add","The addition operator `+`."],["Add","The addition operator `+`."],["AddAssign","The addition assignment operator `+=`."],["AddAssign","The addition assignment operator `+=`."],["BitAnd","The bitwise AND operator `&`."],["BitAnd","The bitwise AND operator `&`."],["BitAndAssign","The bitwise AND assignment operator `&=`."],["BitAndAssign","The bitwise AND assignment operator `&=`."],["BitOr","The bitwise OR operator `|`."],["BitOr","The bitwise OR operator `|`."],["BitOrAssign","The bitwise OR assignment operator `|=`."],["BitOrAssign","The bitwise OR assignment operator `|=`."],["BitXor","The bitwise XOR operator `^`."],["BitXor","The bitwise XOR operator `^`."],["BitXorAssign","The bitwise XOR assignment operator `^=`."],["BitXorAssign","The bitwise XOR assignment operator `^=`."],["CheckedSub","Performs subtraction that returns `None` instead of wrapping around on underflow."],["CheckedSub","Performs subtraction that returns `None` instead of wrapping around on underflow."],["CoerceUnsized","Trait that indicates that this is a pointer or a wrapper for one, where unsizing can be performed on the pointee."],["CoerceUnsized","Trait that indicates that this is a pointer or a wrapper for one, where unsizing can be performed on the pointee."],["Debug","`?` formatting."],["Deref","Used for immutable dereferencing operations, like `*v`."],["Deref","Used for immutable dereferencing operations, like `*v`."],["DerefMut","Used for mutable dereferencing operations, like in `*v = 1;`."],["DerefMut","Used for mutable dereferencing operations, like in `*v = 1;`."],["Deserialize","A data structure that can be deserialized from any data format supported by Serde."],["DispatchFromDyn","This is used for object safety, to check that a method's receiver type can be dispatched on."],["DispatchFromDyn","This is used for object safety, to check that a method's receiver type can be dispatched on."],["Div","The division operator `/`."],["Div","The division operator `/`."],["DivAssign","The division assignment operator `/=`."],["DivAssign","The division assignment operator `/=`."],["Drop","Used to run some code when a value goes out of scope. This is sometimes called a 'destructor'."],["Drop","Used to run some code when a value goes out of scope. This is sometimes called a 'destructor'."],["Fn","The version of the call operator that takes an immutable receiver."],["Fn","The version of the call operator that takes an immutable receiver."],["FnMut","The version of the call operator that takes a mutable receiver."],["FnMut","The version of the call operator that takes a mutable receiver."],["FnOnce","The version of the call operator that takes a by-value receiver."],["FnOnce","The version of the call operator that takes a by-value receiver."],["Generator","The trait implemented by builtin generator types."],["Generator","The trait implemented by builtin generator types."],["Index","Used for indexing operations (`container[index]`) in immutable contexts."],["Index","Used for indexing operations (`container[index]`) in immutable contexts."],["IndexMut","Used for indexing operations (`container[index]`) in mutable contexts."],["IndexMut","Used for indexing operations (`container[index]`) in mutable contexts."],["Mul","The multiplication operator `*`."],["Mul","The multiplication operator `*`."],["MulAssign","The multiplication assignment operator `*=`."],["MulAssign","The multiplication assignment operator `*=`."],["Neg","The unary negation operator `-`."],["Neg","The unary negation operator `-`."],["Not","The unary logical negation operator `!`."],["Not","The unary logical negation operator `!`."],["Num","The base trait for numeric types, covering `0` and `1` values, comparisons, basic numeric operations, and string conversion."],["One","Defines a multiplicative identity element for `Self`."],["PartialEq","Trait for equality comparisons which are partial equivalence relations."],["RangeBounds","`RangeBounds` is implemented by Rust's built-in range types, produced by range syntax like `..`, `a..`, `..b`, `..=c`, `d..e`, or `f..=g`."],["RangeBounds","`RangeBounds` is implemented by Rust's built-in range types, produced by range syntax like `..`, `a..`, `..b`, `..=c`, `d..e`, or `f..=g`."],["Rem","The remainder operator `%`."],["Rem","The remainder operator `%`."],["RemAssign","The remainder assignment operator `%=`."],["RemAssign","The remainder assignment operator `%=`."],["Rng","An automatically-implemented extension trait on [`RngCore`] providing high-level generic methods for sampling values and other convenience methods."],["Serialize","A data structure that can be serialized into any data format supported by Serde."],["Shl","The left shift operator `<<`. Note that because this trait is implemented for all integer types with multiple right-hand-side types, Rust's type checker has special handling for `_ << _`, setting the result type for integer operations to the type of the left-hand-side operand. This means that though `a << b` and `a.shl(b)` are one and the same from an evaluation standpoint, they are different when it comes to type inference."],["Shl","The left shift operator `<<`. Note that because this trait is implemented for all integer types with multiple right-hand-side types, Rust's type checker has special handling for `_ << _`, setting the result type for integer operations to the type of the left-hand-side operand. This means that though `a << b` and `a.shl(b)` are one and the same from an evaluation standpoint, they are different when it comes to type inference."],["ShlAssign","The left shift assignment operator `<<=`."],["ShlAssign","The left shift assignment operator `<<=`."],["Shr","The right shift operator `>>`. Note that because this trait is implemented for all integer types with multiple right-hand-side types, Rust's type checker has special handling for `_ >> _`, setting the result type for integer operations to the type of the left-hand-side operand. This means that though `a >> b` and `a.shr(b)` are one and the same from an evaluation standpoint, they are different when it comes to type inference."],["Shr","The right shift operator `>>`. Note that because this trait is implemented for all integer types with multiple right-hand-side types, Rust's type checker has special handling for `_ >> _`, setting the result type for integer operations to the type of the left-hand-side operand. This means that though `a >> b` and `a.shr(b)` are one and the same from an evaluation standpoint, they are different when it comes to type inference."],["ShrAssign","The right shift assignment operator `>>=`."],["ShrAssign","The right shift assignment operator `>>=`."],["Sub","The subtraction operator `-`."],["Sub","The subtraction operator `-`."],["SubAssign","The subtraction assignment operator `-=`."],["SubAssign","The subtraction assignment operator `-=`."],["Try","A trait for customizing the behavior of the `?` operator."],["Try","A trait for customizing the behavior of the `?` operator."],["Zero","Defines an additive identity element for `Self`."],["Zero","Defines an additive identity element for `Self`."]]});