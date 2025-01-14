/**
 * @file parser for modu :3
 * @author aquiffoo
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-nocheck

module.exports = grammar({
  name: "modu",

  extras: $ => [
    /\s/,
    $.comment
  ],

  rules: {
    source_file: $ => repeat($._statement),

    _statement: $ => choice(
      $.variable_declaration,
      $.assignment,
      $.function_declaration,
      $.if_statement,
      $.return_statement,
      $.expression_statement
    ),

    expression_statement: $ => prec.right(seq(
      $._expression,
      optional(";")
    )),

    variable_declaration: $ => seq(
      "let",
      $.identifier,
      "=",
      $._expression,
      optional(";")
    ),

    assignment: $ => seq(
      $.identifier,
      "=",
      $._expression,
      optional(";")
    ),

    function_declaration: $ => seq(
      "fn",
      $.identifier,
      $.parameter_list,
      $.block
    ),

    parameter_list: $ => seq(
      "(",
      optional(commaSep($.identifier)),
      ")"
    ),

    block: $ => seq(
      "{",
      repeat($._statement),
      "}"
    ),

    if_statement: $ => seq(
      "if",
      $._expression,
      $.block,
      optional(seq(
        "else",
        $.block
      ))
    ),

    return_statement: $ => prec.right(seq(
      "return",
      optional($._expression)
    )),

    _expression: $ => prec.left(choice(
      $.binary_expression,
      $.call_expression,
      $.identifier,
      $.number,
      $.string,
      $.parenthesized_expression
    )),

    binary_expression: $ => prec.left(choice(
      seq($._expression, "+", $._expression),
      seq($._expression, "-", $._expression),
      seq($._expression, "==", $._expression),
      seq($._expression, "!=", $._expression),
    )),

    call_expression: $ => prec(10, seq(
			$.identifier,
			$.argument_list
    )),

		argument_list: $ => seq(
			"(",
			optional(commaSep($._expression)),
			")"
		),

		parenthesized_expression: $ => seq(
			"(",
			$._expression,
			")"
		),

		identifier: $ => /[a-zA-Z_][a-zA-Z0-9_]*/,
		number: $ => /\d+/,
		string: $ => /"([^"\\]|\\.)*"/,
		comment: $ => token(seq("//", /.*/)),
  }
});

function commaSep(rule) { return seq(rule, repeat(seq(",", rule))); }
