from unittest import TestCase

import tree_sitter, tree_sitter_modu


class TestLanguage(TestCase):
    def test_can_load_grammar(self):
        try:
            tree_sitter.Language(tree_sitter_modu.language())
        except Exception:
            self.fail("Error loading Modu grammar")
