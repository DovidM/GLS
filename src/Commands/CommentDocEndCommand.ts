import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * Ends a documentation block.
 */
export class CommentDocEndCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.CommentDocEnd)
        .withDescription("Ends a documentation block.");

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return CommentDocEndCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return LineResults.newSingleLine(this.language.properties.comments.docEnd, false);
    }
}
