import { ArchiveIcon, MessageCircleIcon, ThumbsUp } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { Metadata } from "next";
import { listIssues } from "@/http/list-issues";

export const metadata: Metadata = {
  title: "Board",
};

interface BoardProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams;

  const issues = await listIssues({ search: q });

  return (
    <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Backlog
          </Section.Title>

          <Section.IssueCount>{issues.backlog.length}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {issues.backlog.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="tet-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            issues.backlog.map((issue) => {
              return (
                <Card.Root href={`/issues/${issue.id}`} key={issue.id}>
                  <Card.Header>
                    <Card.Number>ISS-{issue.issueNumber}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <Button>
                      <ThumbsUp className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>
                    <Button>
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              );
            })
          )}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            To-do
          </Section.Title>

          <Section.IssueCount>{issues.todo.length}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {issues.todo.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="tet-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            issues.todo.map((todo) => {
              return (
                <Card.Root href={`/issues/${todo.id}`}  key={todo.id}>
                  <Card.Header>
                    <Card.Number>ISS-{todo.issueNumber}</Card.Number>
                    <Card.Title>{todo.title}</Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <Button>
                      <ThumbsUp className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>
                    <Button>
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              );
            })
          )}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            In progress
          </Section.Title>

          <Section.IssueCount>{issues.in_progress.length}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {issues.in_progress.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="tet-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            issues.in_progress.map((in_progress) => {
              return (
                <Card.Root href={`/issues/${in_progress.id}`} key={in_progress.id}>
                  <Card.Header>
                    <Card.Number>ISS-{in_progress.issueNumber}</Card.Number>
                    <Card.Title>{in_progress.title}</Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <Button>
                      <ThumbsUp className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>
                    <Button>
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              );
            })
          )}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Done
          </Section.Title>

          <Section.IssueCount>{issues.done.length}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {issues.in_progress.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="tet-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            issues.done.map((done) => {
              return (
                <Card.Root href={`/issues/${done.id}`} key={done.id}>
                  <Card.Header>
                    <Card.Number>ISS-{done.issueNumber}</Card.Number>
                    <Card.Title>{done.title}</Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <Button>
                      <ThumbsUp className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>
                    <Button>
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              );
            })
          )}
        </Section.Content>
      </Section.Root>
    </main>
  );
}
