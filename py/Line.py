from graphics import *

def main():
    win = GraphWin("My Line", 100, 100)
    l = Line(Point(1,3), Point(50,90))
    l.draw(win)
    win.getMouse() # pause for click in window
    win.close()


main()
