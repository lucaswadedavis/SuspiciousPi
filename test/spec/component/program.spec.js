var React = require('react/addons');
var Parser = require('../../../public/js/compiler/Parser');
var generateCode = require('escodegen').generate;
var execute = require('../../../public/js/compiler/Execute');

var codeStubs = require("../../lib/stub/codeStubs");


describe("Program Compiler", function() {

  it("should have test data", function() {
    var test = 'declarations/variable_declaration';
    var data  = codeStubs[test].data;

    expect(data.programSteps).toBeDefined()
    expect(data.components).toBeDefined()
    expect(data.scopes).toBeDefined()
  });

  it("should have a global component", function() {
    var test = 'declarations/variable_declaration';
    var data  = codeStubs[test].data;

    var global = data.components[0];

    expect(global.id).toBe(0);
    expect(global.type).toBe('block');
    expect(global.name).toBe('global');
  });


  describe("Variable Declarations", function() {

    it("should parse variable declarations", function() {
      var test = 'declarations/variable_declaration';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should parse variable declarations to boolean", function() {
      var test = 'declarations/boolean_declaration';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should parse variable declarations to undefined", function() {
      var test = 'declarations/undefined_declaration';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle implicit variable declaration", function() {
      var test = 'declarations/implicit_declaration';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

  });

  describe("Simple Expressions", function() {

    it("should handle assignment", function() {
      var test = 'expressions/assignment';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle assignment with operators", function() {
      var test = 'expressions/assignment_with_operator';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle the post-increment operator", function() {
      var test = 'expressions/post-increment_operator';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle the pre-increment operator", function() {
      var test = 'expressions/pre-increment_operator';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle the shorthand expression assignment operator", function() {
      var test = 'expressions/shorthand_expression_assignment_operator';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

  });

  describe("Flow Control", function() {

    describe("Conditionals", function() {

      it("should handle simple if statements", function() {
        var test = 'conditionals/if_statement';
        var output = codeStubs[test].output;
        var executed = JSON.stringify( execute(output) );
        var stubData = JSON.stringify( codeStubs[test].data );

        expect( executed ).toBe( stubData );
      });

      it("should handle if / else statements", function() {
        var test = 'conditionals/if_else_statement';
        var output = codeStubs[test].output;
        var executed = JSON.stringify( execute(output) );
        var stubData = JSON.stringify( codeStubs[test].data );

        expect( executed ).toBe( stubData );
      });

      it("should handle if / else if / else statements", function() {
        var test = 'conditionals/if_else_if_else_statement';
        var output = codeStubs[test].output;
        var executed = JSON.stringify( execute(output) );
        var stubData = JSON.stringify( codeStubs[test].data );

        expect( executed ).toBe( stubData );
      });

      it("should handle nested if statements", function() {
        var test = 'conditionals/nested_if_statement';
        var output = codeStubs[test].output;
        var executed = JSON.stringify( execute(output) );
        var stubData = JSON.stringify( codeStubs[test].data );

        expect( executed ).toBe( stubData );
      });

    });

    describe("Loops", function() {
      it("should handle for loops", function() {
        var test = 'loops/for_loop';
        var output = codeStubs[test].output;
        var executed = JSON.stringify( execute(output) );
        var stubData = JSON.stringify( codeStubs[test].data );

        expect( executed ).toBe( stubData );
      });
      it("should handle while loops", function() {
        var test = 'loops/while_loop';
        var output = codeStubs[test].output;
        var executed = JSON.stringify( execute(output) );
        var stubData = JSON.stringify( codeStubs[test].data );

        expect( executed ).toBe( stubData );
      });
      it("should handle while loops", function() {
        var test = 'loops/do_while_loop';
        var output = codeStubs[test].output;
        var executed = JSON.stringify( execute(output) );
        var stubData = JSON.stringify( codeStubs[test].data );

        expect( executed ).toBe( stubData );
      });
      it("should handle nested loops", function() {
        var test = 'loops/nested_loops';
        var output = codeStubs[test].output;
        var executed = JSON.stringify( execute(output) );
        var stubData = JSON.stringify( codeStubs[test].data );

        expect( executed ).toBe( stubData );
      });
    });

  });

  describe("Functions", function() {
    it("should handle function declarations", function() {
      var test = 'functions/function_declaration';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle function invocation with a variable assignment", function() {
      var test = 'functions/function_invocation_assignment';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle function invocation without assignment", function() {
      var test = 'functions/function_invocation';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle functions with return statements", function() {
      var test = 'functions/function_return_statement';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle functions with a single argument", function() {
      var test = 'functions/function_with_argument';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle functions with multiple arguments", function() {
      var test = 'functions/function_with_arguments';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle functions with conditionally dependent return statements", function() {
      var test = 'functions/function_with_conditional_returns';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle functions with return operations", function() {
      var test = 'functions/function_with_return_operation';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle recursive functions", function() {
      var test = 'functions/recursive_function';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });
  });


  describe("Object", function() {
    it("should handle object declarations", function() {
      var test = 'objects/object_declaration';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle object properties", function() {
      var test = 'objects/object_properties';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle object methods", function() {
      var test = 'objects/object_methods';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle object method invocations", function() {
      var test = 'objects/object_method_invocation';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle object properties that are objects", function() {
      var test = 'objects/object_property_object';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should handle nested objects with methods", function() {
      var test = 'objects/object_property_object_method';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should set object properties", function() {
      var test = 'objects/set_object_property';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should set object methods", function() {
      var test = 'objects/set_object_method';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should set existing object properties", function() {
      var test = 'objects/set_existing_object_property';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should set properties of nested objects", function() {
      var test = 'objects/set_nested_object_property';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });

    it("should reset an object to a variable", function() {
      var test = 'objects/set_object_to_variable';
      var output = codeStubs[test].output;
      var executed = JSON.stringify( execute(output) );
      var stubData = JSON.stringify( codeStubs[test].data );

      expect( executed ).toBe( stubData );
    });
  });

});
